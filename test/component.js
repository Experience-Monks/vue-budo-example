/*
Boilerplate for a single component:
  node tools/component src/buttons/button1.vue

Or with tooler, from within a folder:
  tooler button1.vue
 */

var Vue = require('vue');
document.body.appendChild(document.createElement('app'));

var props = require(process.env.stub);
console.log(props);

new Vue({
  el: 'body',
  components: { app: require(process.env.entry) }
});