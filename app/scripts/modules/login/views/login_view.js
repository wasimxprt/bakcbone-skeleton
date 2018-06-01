define([
    'app',
    'tpl!modules/login/templates/login.tpl',
    'modules/login/model/login_model'
], function (DemoApp, LayoutTpl, LoginModel) {

    DemoApp.module('LoginApp.Login', function (Login, DemoApp, Backbone, Marionette, $, _) {

        // LAYOUT -------------------------------------------------------

        Login.Layout = Marionette.LayoutView.extend({

            initialize: function () {

            },
            template: LayoutTpl,

            events: {
                'click #submitBtn': 'submitHandler',
            },

            submitHandler: function (e) {
                e.preventDefault();

                var data = {
                    email: $('#inputEmail').val(),
                    password: $('#inputPassword').val()
                }

                console.log('LoginApp.Login View --> submitHandler data:', LoginModel);

                //validUser = this.model.set('email', $('#inputEmail').val(), { validate: true });
                // validPass = LoginModel.set('password', $('#inputPassword').val(), { validate: true });


                // if (!validUser) {
                //     $(e.target).find('#inputEmail').select();
                // } else {
                //     $(e.target).find('#inputEmail').next(':input').select();
                // }

                // if (!validPass) {
                //     $(e.target).find('#inputPassword').select();
                // }

                //DemoApp.LoginApp.trigger('login:submit', data);
            },

            templateHelpers: function () {
                return this.data;
            },

            serializeData: function () {
                var data = {};
                // if (typeof this.attributes !== 'undefined') data = this.attributes;
                // locale.gt = Utils.gt;
                // data['locale'] = locale;

                // if (typeof this.notObjHTML !== 'undefined') {
                //     data.notObjHTML = this.notObjHTML;
                // }
                return data;
            },

            onRender: function () {

            },

            onShow: function () {

            }
        });
    });

    return DemoApp.LoginApp.Login;
});
