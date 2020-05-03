import Vue from "vue";
import Prism from "vue-prism-component";

import "prismjs";
import "prismjs/themes/prism-funky.css";

//import "prismjs/components/prism-markup-templating.js";

import "prismjs/components/prism-scss";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-http";
import "prismjs/plugins/toolbar/prism-toolbar"
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard"

import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/autolinker/prism-autolinker.css";

Vue.component("prism", Prism);

export default Prism
