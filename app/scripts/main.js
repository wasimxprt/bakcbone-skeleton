require.config({

  paths: {
    backbone: "vendor/backbone",
    "backbone.picky": "vendor/backbone.picky",
    "backbone.syphon": "vendor/backbone.syphon",
    jquery: "vendor/jquery",
    "jquery-ui": "vendor/jquery-ui",
    json2: "vendor/json2",
    localstorage: "vendor/backbone.localstorage",
    marionette: "vendor/backbone.marionette",
    spin: "vendor/spin",
    "spin.jquery": "vendor/spin.jquery",
    text: "vendor/text",
    tpl: "vendor/underscore-tpl",
    underscore: "vendor/underscore"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2"],
      exports: "Backbone"
    },
    "backbone.picky": ["backbone"],
    "backbone.syphon": ["backbone"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    "jquery-ui": ["jquery"],
    localstorage: ["backbone"],
    "spin.jquery": ["spin", "jquery"],
    tpl: ["text"]
  },
  // paths: {
  //   'jquery': 'vendor/jquery/dist/jquery',
  //   'underscore': 'vendor/underscore/underscore',
  //   'backbone': 'vendor/backbone/backbone',
  //   'backbone.babysitter': 'vendor/backbone.babysitter/lib/backbone.babysitter.js',
  //   'backbone.wreqr': 'vendor/backbone.wreqr/lib/backbone.wreqr.js',
  //   'marionette': 'vendor/marionette/backbone.marionette'
  // },
  // shim: {
  //   underscore: {
  //     exports: '_'
  //   },
  //   backbone: {
  //     exports: 'Backbone',
  //     deps: ['jquery', 'underscore']
  //   },
  //   marionette: {
  //     exports: 'Marionette',
  //     deps: ['backbone']
  //   }
  // },
  deps: ['jquery', 'underscore']
});


require(["app"], function (DemoApp) {
  DemoApp.start();
});
