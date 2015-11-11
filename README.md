# vue-budo-example

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

An experiment using budo to run independent Vue.js components with optional Hot Module Replacement.

## Usage

```sh
git clone https://github.com/Jam3/vue-budo-example.git
cd vue-budo-example
npm install
```

Now from the package root, you can run an isolated component:

```sh
npm run component -- src/ui/buttons/button1.vue [--open|--hmr]
```

#### tooler

The `npm run` command can get clunky, especially when you are inside child folders. Instead we can use [tooler](http://npmjs.com/package/tooler) for this. Install it globally:

```sh
npm install tooler -g
```

Now you can just run:

```sh
tooler src/ui/buttons/button1.vue
```

Or, `cd` into the `src/ui/buttons` folder, and run:

```sh
tooler button1.vue

# launch browser
tooler button1.vue --open

# enable HMR
tooler button1.vue --hmr
```

This project has a special `"tooler"` field in `package.json` to point to the [tools/component.js](./tools/component.js) script.

## Scripts

If you need to add transforms or other project-specific features, the [tools/component](./tools/component.js) script can be modified.

If you need to modify the Vue boilerplate, see [test/component.js](./test/component.js).

## How To Set Up on Project

Currently to set things up on project, you need to do the following:

1. Once you install `vue`, also install the following:  
`npm install --save-dev require-path-relative minimist notify-error budo`
2. Copy the `tools/component.js` script.
3. Copy the `test/component.js` script.
4. Add `"tooler": "./tools/component.js"` to your package.json.

Once this is more stable, some features will be split into modules to make it easier to use this on other projects.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/vue-budo-example/blob/master/LICENSE.md) for details.
