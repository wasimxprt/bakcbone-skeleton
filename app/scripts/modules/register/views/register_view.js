define([
    'app',
    'tpl!modules/register/templates/register.tpl'
], function (DemoApp, LayoutTpl) {

    DemoApp.module('RegisterApp.Register', function (Register, DemoApp, Backbone, Marionette, $, _) {

        // LAYOUT -------------------------------------------------------

        Register.Layout = Marionette.LayoutView.extend({

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
                    password: $('#inputPassword').val(),
                    name: $('#inputName').val()
                }

                console.log('RegisterApp.Register View --> submitHandler data:', data);


                DemoApp.RegisterApp.trigger('register:submit', data);
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

    return DemoApp.RegisterApp.Register;
});
