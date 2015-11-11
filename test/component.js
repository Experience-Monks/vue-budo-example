/*
Boilerplate for a single component:
  node tools/component src/buttons/button1.vue

Or with tooler, from within a folder:
  tooler button1.vue
 */

var Vue = require('vue');
var Component = Vue.extend(require(process.env.entry));
new Component({ el: 'body', replace: false });