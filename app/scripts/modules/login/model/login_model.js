define([
    'app'
], function (EcommerceApp) {
    var LoginModel = Backbone.Model.extend({
        defaults: {
            email: '',
            password: ''
        },
        validate: function (attr, options) {
            if (!attr.email) {
                return 'I need your email';
            }
            if (!attr.password) {
                return 'I need your password';
            }
        },
        initialize: function () {
            this.on("invalid", function (model, error) {
                console.log(model, error); // error consoles 2 times (4 times for both)
            });
        }
    });

    return LoginModel;
})