
import {
  shallowMount,
  mount
}
from "@vue/test-utils";
//import Vue from 'vue'
import TranslatedContent from './TranslatedContent'

describe('TranslatedContent', () => {
  let contentDataSampleInvalid0 = {
    "name": "p",
    "data": "Some invalid p",
    "children": []
  }
  let contentDataSample0 = {
    "name": "main",
    "children": [{
      "name": "b",
      "data": "Emmm"
    }]
  }
  let contentDataSample1 = {
    "name": "main",
    "children": [{
      "name": "p",
      "data": "Some paragraph"
    }]
  }
  let contentDataSample2 = {
    "name": "main",
    "children": [{
      "name": "p",
      "children": [{
        "name": "i",
        "data": "Italic"
      }]
    }]
  }
  let contentDataSample3 = {
    "name": "main",
    "children": [{
      "name": "p",
      "children": [{
        "data": "Prefix "
      }, {
        "name": "i",
        "data": "Italic"
      }, {
        "data": " Suffix"
      }]
    }]
  }
  let contentDataSample4 = {
    "name": "main",
    "children": [{
      "name": "p",
      "children": [{
        "data": "Go to:"
      }, {
        "name": "a",
        "data": "articles",
        "attribs": {
          "href": "https://google.com/"
        }
      }]
    }]
  }
  let contentDataSample5 = {
    "name": "main",
    "children": [{
      "name": "pre",
      "children": [{
        "name": "code",
        "data": "<H1>HELLO WORLD</H1>",
        "attribs": {
          "class": "language-html"
        },
      }]
    }]
  }

  let contentDataSample8 = {
    "name": "main",
    "children": [{
        "name": "p",
        "data": "I am unable to disclose much about this project. Mainly it is a GUI app written in C++ that is the main gate through which the user interacts with a professional coffee maker."
      },
      {
        "name": "p",
        "data": "Challenges:"
      },
      {
        "name": "ol",
        "children": [{
            "name": "li",
            "data": "make the C++ GUI application from scratch, drawing everything from a button to centered text to other images, etc."
          },
          {
            "name": "li",
            "children": [{
                "data": "compile the C++ app for an inexpensive, small, not too capable, embedded "
              },
              {
                "name": "a",
                "data": "IMX 6ul processor ",
                "attribs": {
                  "href": "http://www.variscite.com/products/system-on-module-som/cortex-a7/dart-6ul-freescale-imx-6ul"
                }
              }
            ]
          },
          {
            "name": "li",
            "data": "compile a Yocto Linux build that includes the dependencies of the C++ app as well as the application itself, and deploy."
          },
          {
            "name": "li",
            "data": "have a channel of communication between the c++ gui app and the other hardware pieces in the coffee maker."
          }
        ]
      },
      {
        "name": "p",
        "data": "Everything hardware related was achieved by my partner."
      },
      {
        "name": "p",
        "data": "The UI was comprised of the following: homepage, menu page, adding coffee/tea profiles page (certain periods of time at certain bar pressures), set the time, others."
      }
    ]
  };

  var getTranslatedContent = function (contentJson) {
    if (contentJson == undefined) throw "Content json parameter not provided"

    var translatedContent = mount(TranslatedContent, {
      propsData: {
        contentJson
      }
    })
    return translatedContent
  }

  it('some test', () => {
    let html = getTranslatedContent(contentDataSample0).html()
    expect(html.replace(/\n|\r/g, "")).toStrictEqual('<div><b>Emmm</b></div>')
  });

  it('some test', () => {
    expect(getTranslatedContent(contentDataSample1).html()).not.toStrictEqual("")

    let html = getTranslatedContent(contentDataSample1).html()
    expect(html.replace(/\n|\r/g, "")).toStrictEqual('<div>  <p>Some paragraph</p></div>')
  });

  it('some test', () => {
    let html = getTranslatedContent(contentDataSample2).html()
    expect(html.replace(/\n|\r| /g, "")).toStrictEqual('<div><p><i>Italic</i></p></div>')
  });

  it('some test', () => {
    let html = getTranslatedContent(contentDataSample3).html()
    expect(html.replace(/\n|\r/g, "")).toStrictEqual('<div>  <p>Prefix <i>Italic</i> Suffix</p></div>')
  });

  it('some test', () => {
    let html = getTranslatedContent(contentDataSample4).html()
    expect(html.replace(/\n|\r/g, "")).toStrictEqual('<div>  <p>Go to:<a href="https://google.com/">articles</a></p></div>')
  });

  it('some test', () => {
    let html = getTranslatedContent(contentDataSample8).html()
    expect(html.replace(/\n|\r/g, "")).toStrictEqual('<div>  <p>I am unable to disclose much about this project. Mainly it is a GUI app written in C++ that is the main gate through which the user interacts with a professional coffee maker.</p>  <p>Challenges:</p>  <ol>    <li>make the C++ GUI application from scratch, drawing everything from a button to centered text to other images, etc.</li>    <li>compile the C++ app for an inexpensive, small, not too capable, embedded <a href=\"http://www.variscite.com/products/system-on-module-som/cortex-a7/dart-6ul-freescale-imx-6ul\">IMX 6ul processor&nbsp;</a></li>    <li>compile a Yocto Linux build that includes the dependencies of the C++ app as well as the application itself, and deploy.</li>    <li>have a channel of communication between the c++ gui app and the other hardware pieces in the coffee maker.</li>  </ol>  <p>Everything hardware related was achieved by my partner.</p>  <p>The UI was comprised of the following: homepage, menu page, adding coffee/tea profiles page (certain periods of time at certain bar pressures), set the time, others.</p></div>')
  });

  it('throws exception if it has children and data (it should have either one but not both)', async () => {
    jest.spyOn(global.console, 'error').mockImplementation(jest.fn())
    expect(() => getTranslatedContent(contentDataSampleInvalid0).html()).toThrow()
    jest.spyOn(global.console, 'error').mockRestore()
  });

  it('some test', () => {
    let html = getTranslatedContent(contentDataSample5).html()
    expect(html.replace(/\n|\r/g, "")).toStrictEqual('<div><pre class=\"language-html\"><code class=\"language-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>H1</span><span class=\"token punctuation\">&gt;</span></span>HELLO WORLD<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>H1</span><span class=\"token punctuation\">&gt;</span></span></code></pre></div>')
  });
});
