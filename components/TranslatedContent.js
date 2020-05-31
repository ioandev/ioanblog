import Prism from '~/plugins/prism-test'

function renderCode(h, obj) {
  const languageClassPrefix = "language-"
  // classes
  let language = undefined


  let classes = ""
  if (obj.children[0].attribs != undefined && obj.children[0].attribs.class != undefined) {
    classes = obj.children[0].attribs.class
  }
  if (obj.attribs != undefined && obj.attribs.class != undefined) {
    classes = obj.attribs.class
  }
  classes = classes.split(' ')
  let languageClasses = classes.filter(cl => cl.indexOf(languageClassPrefix) == 0)
  if (languageClasses.length == 1) {
    language = languageClasses[0].replace(languageClassPrefix, "")
  }

  if (languageClasses == undefined) {
    //throw "Language classes was " + languageClasses
  }
  let toReturn = h("prism", {
    props: {
      language
    }
  }, obj.children[0].data)

  toReturn = h("div", {
    attrs: {
      class: "codeParent"
    }
  }, [toReturn])

  toReturn = h("client-only", {}, [toReturn])

  return toReturn
}

function renderIframe(h, obj, alreadyRendered) {
  return h("div", {
    attrs: {
      style: "--aspect-ratio: 16/9; min-height:320px;" // TODO: this is a bug in production only.
    }
  }, [alreadyRendered]);
}

function getObjName(name) {
  if (name == "main") {
    return "div"
  }
  return name
}

function getAttrs(attrs) {
  attrs = attrs || {}

  if (attrs.width != undefined) {
    delete attrs.width
  }
  if (attrs.height != undefined) {
    delete attrs.height
  }
  return attrs
}

function renderMy(h, obj) {
  let children = []

  if (obj.data != undefined && obj.children != undefined) {
    throw "Can only have name and children one at a time, name was: " + obj.name + " with data: " + obj.data
  }

  if (obj.name == undefined) {
    return obj.data
  }

  if (obj.name == "pre") {
    return renderCode(h, obj)
  }

  if (obj.children != undefined) {
    obj.children.forEach(child => {
      let renderedChild = renderMy(h, child)
      children.push(renderedChild)
    });
  } else {
    children.push(obj.data)
  }

  let attrs = getAttrs(obj.attribs)
  if (obj.name == "main") {
    let newClasses = " font-light leading-9 "
    if(attrs.class == undefined) {
      attrs.class = ""
    }
    attrs.class += newClasses
  }
  let objName = getObjName(obj.name)
  const root = h(objName, {
    attrs
  }, children);

  if (obj.name == "iframe") {
    return renderIframe(h, obj, root)
  }

  return root
}

export default {
  components: {
    //Prism // fixes test, breaks build
  },
  props: {
    "contentJson": {
      type: Object,
    },
  },

  render(h) {
    if (this.$props.contentJson == undefined) {
      return h('p', {}, ['Could not render this content.'])
    }

    return renderMy(h, this.$props.contentJson);
  }
}
