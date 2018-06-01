define([
    'app',
    'modules/login/views/login_view'
], function (DemoApp) {

    DemoApp.module('LoginApp.Login', function (Login, DemoApp) {


        DemoApp.reqres.setHandler('login:sendlogindata', function (options) {

            return Login.Controller.doRequest(options);
        });




        var Controller = Marionette.Controller.extend({

            showLoginForm: function () {
                console.log('loginsApp --> showNotification was called!');
                DemoApp.LoginView = new Login.Layout();
                DemoApp.mainRegion.show(DemoApp.LoginView);

            },

            submitHandler: function (data) {
                console.log('Login.Controller --> submitHandler :', data);

                var that = this;

                var LoginConfirm = DemoApp.request('login:sendlogindata', data);


                $.when(LoginConfirm).done(function (response, status, jqXHR) {
                    console.log('Login.Controller --> submitHandler RESPONSE:', response, status, jqXHR);

                    if (status === 'success') {
                        console.log('Login.Controller --> submitHandler -> status = success');
                        //that.consentConfirmSuccessCallback(response);
                    } else {
                        console.log('ConsentController --> submitHandler -> status != success', status);
                        //that.consentConfirmErrorCallback(response);
                    }

                }).fail(function (model, response, options) {

                    console.log('Login.Controller --> submitHandler -> fail', model, response, options);
                    //that.consentConfirmErrorCallback(response);
                });
            },

            consentConfirmSuccessCallback: function (response) {
                console.log('ConsentController --> consentConfirmSuccessCallback response:', response);
                var notObj = {
                    type: 'spinnerOnly',
                    message: '',
                    spinner: true,
                    overlay: true
                };
                VFApp.trigger('vfapp:notification', notObj);


	            /*var notObj = {
					type: 'info',
					title: locale.gt('consent.consentConfirm.success.title'),
					message: locale.gt('consent.consentConfirm.success.message'),
					spinner: false
				};
				VFApp.trigger('vfapp:notification', notObj);*/
                Utils.processContext(VFApp, response, 2000);
            },

            consentConfirmErrorCallback: function (response) {
                console.log('ConsentController --> consentConfirmErrorCallback response:', response);
                //todo: [forntend] --> handle error response differently based on the returned value from response
                var notObj = {
                    type: 'error',
                    title: locale.gt('consent.consentConfirm.error.title'),
                    message: locale.gt('consent.consentConfirm.error.message')
                };
                VFApp.trigger('vfapp:notification', notObj);
            },

            doRequest: function (opts) {

                var defer = $.Deferred();

                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3001/api/user/signin',
                    data: {
                        email: opts.email,
                        password: opts.password
                    },
                    success: function (data, status, jqXHR) {
                        console.log('doRequest success');
                        defer.resolve(data, status, jqXHR);
                    },
                    error: function (jqXHR, status, error) {
                        console.log('doRequest error');
                        defer.reject(jqXHR, status, error);
                    }
                });

                return defer.promise();
            }
        });

        Login.Controller = new Controller();


        // EVENTS --------------------------------------------------------------

        Login.Controller.listenTo(DemoApp.LoginApp, 'login:submit', function (data) {
            console.log('Login.Controller --> submit action');
            Login.Controller.submitHandler(data);
        });

    });

    return DemoApp.LoginApp.Login;
});

