define([
    'app'
], function (DemoApp) {

    DemoApp.module('RegisterApp', function (RegisterApp, DemoApp, Backbone, Marionette, $, _) {

        // API -----------------------------------------------------------------

        var API = {
            showRegisterForm: function () {
                console.log('RegisterApp --> showregisterForm');
                require([
                    'modules/register/register_controller'
                ], function () {
                    DemoApp.RegisterApp.Register.Controller.showRegisterForm();
                });
            }
        };

        // EVENTS --------------------------------------------------------------

        var self = DemoApp;

        self.listenTo(DemoApp, 'register:shownregisterform', function () {
            API.showRegisterForm();
        });

    });

    return DemoApp.RegisterApp;
});