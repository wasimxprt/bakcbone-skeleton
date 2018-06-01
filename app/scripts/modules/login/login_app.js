define([
    'app'
], function (DemoApp) {

    DemoApp.module('LoginApp', function (LoginApp, DemoApp, Backbone, Marionette, $, _) {

        // Model
        LoginApp.LoginModel = Backbone.Model.extend({
            defaults: {
                email: '',
                password: ''
            },

            url: '/api/orders/dashboard'
        });

        // API -----------------------------------------------------------------

        var API = {
            showLoginForm: function () {
                console.log('LoginApp --> showNotification');
                require([
                    'modules/login/login_controller'
                ], function () {
                    DemoApp.LoginApp.Login.Controller.showLoginForm();
                });
            }
        };

        // EVENTS --------------------------------------------------------------

        var self = DemoApp;

        self.listenTo(DemoApp, 'login:shownloginform', function () {
            API.showLoginForm();
        });

    });

    return DemoApp.LoginApp;
});