define([
    'marionette'
], function (Marionette) {

	/**
	 * 	  ___              _ _           _   _
		 / _ \            | (_)         | | (_)
		/ /_\ \_ __  _ __ | |_  ___ __ _| |_ _  ___  _ __
		|  _  | '_ \| '_ \| | |/ __/ _` | __| |/ _ \| '_ \
		| | | | |_) | |_) | | | (_| (_| | |_| | (_) | | | |
		\_| |_/ .__/| .__/|_|_|\___\__,_|\__|_|\___/|_| |_|
		      | |   | |
		      |_|   |_|
	 */
    var DemoApp = new Marionette.Application();

    DemoApp.addRegions({
        header: "#header-region",
        mainRegion: '#main-region',
    });

    DemoApp.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    DemoApp.showLoginForm = function () {
        console.log("login");
        require([
            'modules/login/login_app'
        ], function () {
            DemoApp.trigger('login:shownloginform');
        });
    };

    DemoApp.showRegisterForm = function () {
        console.log("register");
        require([
            'modules/register/register_app'
        ], function () {
            DemoApp.trigger('register:shownregisterform');
        });
    };

	/**
	 * 	______            _   _
		| ___ \          | | (_)
		| |_/ /___  _   _| |_ _ _ __   __ _
		|    // _ \| | | | __| | '_ \ / _` |
		| |\ \ (_) | |_| | |_| | | | | (_| |
		\_| \_\___/ \__,_|\__|_|_| |_|\__, |
		                               __/ |
		                              |___/
    */

    var DemoAppRouter = Marionette.AppRouter.extend({

        appRoutes: {
            '': 'Login',
            'login': 'Login',
            'register': 'Register'
        },
        onRoute: function (name, path, args) {
            API.urlObj.routeWasTriggered = name;
        }
    });

    /**identify
     *
     * Neither of these rules work (they are here for knowledge base only) :
     * '/authorize#code=:code&state=:state&id_token=:idtoken':       'RedirectURL',
     * 'authorize?*queryString':                                     'RedirectURLWithError',
     * '?error=:error&error_description=:errorDesc&state=:state': 	'RedirectURLWithError',
     *
	 *    ___   ______   _____
		 / _ \  | ___ \ |_   _|
		/ /_\ \ | |_/ /   | |
		|  _  | |  __/    | |
		| | | | | |      _| |_
		\_| |_/ \_|      \___/
	 */

    var API = {
        urlObj: {},

        Login: function (params) {
            DemoApp.showLoginForm();
        },
        Register: function () {
            DemoApp.showRegisterForm();
        }
    };

	/**
	 *    ___                _____ _             _
		 / _ \              /  ___| |           | |
		/ /_\ \_ __  _ __   \ `--.| |_ __ _ _ __| |_
		|  _  | '_ \| '_ \   `--. \ __/ _` | '__| __|
		| | | | |_) | |_) | /\__/ / || (_| | |  | |_
		\_| |_/ .__/| .__/  \____/ \__\__,_|_|   \__|
		      | |   | |
		      |_|   |_|
	 */

    DemoApp.on("start", function () {
        console.log('DemoApp has started');
        if (Backbone.history) {

            var router = new DemoAppRouter({
                controller: API
            });

            Backbone.history.start(); // used to be --> Backbone.history.start({ pushState: true });
        }
    });
    return DemoApp;
});
