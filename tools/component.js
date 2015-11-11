/*
  
  Runs a specified entry file using a dev server (budo).
  Transforms `process.env.entry` into the entry, for "dynamic"
  requires.
 */

var path = require('path');
var requirePath = require('require-path-relative');
var notify = require('notify-error');
var argv = require('minimist')(process.argv.slice(2), {
  boolean: [ 'hmr', 'open' ],
  alias: {
    hmr: 'h',
    open: 'o'
  }
});

var entry = argv._[0];
var hmr = argv.hmr;
if (!entry) {
  console.error('Must specify entry. Example usage with tooler:\n' +
    '  tooler button1.vue');
  process.exit(1);
}

// test boilerplate that sets up Vue component
var testEntry = path.resolve(__dirname, '..', 'test', 'component.js');
var cwd = process.cwd();
var file = requirePath(path.dirname(testEntry), cwd, entry);
var app = require('budo')(testEntry, {
  stream: process.stdout,
  live: !hmr,
  dir: path.resolve(__dirname, '..'), // static folder(s)
  open: argv.open,
  serve: 'bundle.js',
  browserify: {
    transform: [
      [ 'envify', { entry: file } ],
      'vueify'
    ],
    plugin: hmr ? [ 'browserify-hmr' ] : undefined
  }
});

if (hmr) { // extra alert when in HMR mode
  app.on('bundle-error', notify);
}
