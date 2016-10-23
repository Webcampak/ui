/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.authentication.Authentication");
//</debug>
/*
 * This controller does the following
 * - Handle the submission of the login form
 * - Constantly verify the authentication status returned by the backend, display the login form if the user is not authenticated.
 */
Ext.define("WPAKT.controller.core.authentication.Authentication", {
    extend: "Ext.app.Controller"

    , stores: [
        "core.authentication.Users"
        , "core.ServerAvailability"
    ]

    , models: [
        "core.authentication.Users"
        , "core.ServerAvailability"
    ]

    , views: [
        "core.authentication.Main"
        , "core.authentication.login.Main"
        , "core.authentication.login.Label"
        , "core.authentication.login.Username"
        , "core.authentication.login.Password"
        , "core.authentication.login.RememberMe"
        , "core.authentication.login.ButtonLogin"
        
        , "core.authentication.resetpassword.Main"
        , "core.authentication.changepassword.Main"
        , "core.authentication.profile.Main"
    ]

    , refs: [
        {ref: "coreauthenticationmain",                    selector: "coreauthenticationmain",                autoCreate: true,   xtype: "coreauthenticationmain" }
        , {ref: "coreauthenticationresetpasswordmain",     selector: "coreauthenticationresetpasswordmain"    }
        , {ref: "coreauthenticationchangepasswordmain",    selector: "coreauthenticationchangepasswordmain"   }
        , {ref: "coreauthenticationprofilemain",           selector: "coreauthenticationprofilemain"          }
        , {ref: "coreauthenticationloginmain",             selector: "coreauthenticationloginmain",           autoCreate: true,   xtype: "coreauthenticationmain" }
        , {ref: "coreauthenticationloginlabel",            selector: "coreauthenticationloginlabel"           }
        , {ref: "coreauthenticationloginusername",         selector: "coreauthenticationloginusername"        }
        , {ref: "coreauthenticationloginpassword",         selector: "coreauthenticationloginpassword"        }
        , {ref: "coreauthenticationloginrememberme",       selector: "coreauthenticationloginrememberme"      }
        , {ref: "coreauthenticationloginbuttonlogin",      selector: "coreauthenticationloginbuttonlogin"     }
        , {ref: "coreauthenticationresetpasswordmain",     selector: "coreauthenticationresetpasswordmain"    }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "*": {
                "WPAKT.controller.core.authentication.Authentication.doFormLogin": this.doFormLogin
            }            
            , "coreauthenticationloginbuttonlogin":    {click: this.doFormLogin}
        });     
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.core.authentication.Authentication.showLogin": this.showLogin
                  }
             }
        });
    }
    
    /*
     * Constantly verify the authentication status, 
     * This process of constantly checking authentication status actually only kicks-in oncee the server availability store contains some data. 
     * @returns {undefined}
     */
    , onLaunch: function() {
        var scope = this;
        var lastServerAvailabilityStatus = this.getCoreServerAvailabilityStore().last();
        if (lastServerAvailabilityStatus === undefined || lastServerAvailabilityStatus === null) {
            this.consoleLog("onLaunch() - App not initialized yet");
            setTimeout(function() {
                scope.onLaunch();
            },100);
        } else {
            var interval = setInterval(function() {
                scope.checkAuthenticationStatus();
            }, 500);             
        }
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Authentication: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    /*
     * Setters and getters for previous page (if user link to a page without being authenticated)
     * @returns {AuthenticationAnonym$0.previousRoute}
     */
    , getPreviousRoute: function() {
        if (this.previousRoute === undefined) {this.setPreviousRoute(false);}
        return this.previousRoute;
    }

    , setPreviousRoute: function(previousRoute) {
        this.previousRoute = previousRoute;
        return this.previousRoute;
    }

    /**
     * Check the authentication status based on the last ping to the API. 
     * If the user is not authenticated, it will store the user"s current page and re-route to the login page.
     */
    , checkAuthenticationStatus: function() {
        var lastServerAvailabilityStatus = this.getCoreServerAvailabilityStore().last();        
        if (lastServerAvailabilityStatus.get("AUTHENTICATED") === "N") {
            var currentWindowHash = window.location.hash.replace("#","");
            if (currentWindowHash !== "auth/login") {
                this.setPreviousRoute(currentWindowHash);
                this.redirectTo("auth/login");
            }
        }
    }

    /**
     * Display the login window
     */
    , showLogin: function() {
        this.consoleLog("showLogin()");
        this.getCoreauthenticationloginmain().show();
        this.getCoreauthenticationresetpasswordmain().hide();   
        this.getCoreauthenticationchangepasswordmain().hide();   
        this.getCoreauthenticationprofilemain().hide();           
    }

    /*
     * Checks if the user is authenticated, if not, show the login window
     * @returns {undefined}
     */
    , displayLoginWindow: function() {
        this.consoleLog("displayLoginWindow()");
        var currentUser = this.getCoreServerAvailabilityStore().first();
        if (currentUser.get("AUTHENTICATED") === "N") {
            this.getCoreauthenticationmain().show();
            this.getCoreauthenticationmain().toFront();
            this.getCoreauthenticationloginmain().show();
            this.getCoreauthenticationresetpasswordmain().hide();   
            this.getCoreauthenticationchangepasswordmain().hide();   
            this.getCoreauthenticationprofilemain().hide();              
        } else {
            this.getCoreauthenticationmain().hide();
            this.fireEvent("WPAKT.controller.core.authentication.UserSettings.loadUserSettings");
        }
    }    
    
    /*
     * On form submission, perform login through an ajax call
     */
    , doFormLogin: function() {
        this.consoleLog("doFormLogin()");
        var scope = this;
        if (document.location.protocol === "https:") {
            var formUsername = this.getCoreauthenticationloginusername().getValue();
            var formPassword = this.getCoreauthenticationloginpassword().getValue();
            var formRememberMe = this.getCoreauthenticationloginrememberme().getValue();
            if (formRememberMe === true) {formRememberMe = "Y";}
            else {formRememberMe = "N";}
            if (formUsername.length < 2 || formPassword.length < 2) {
                Ext.MessageBox.show({
                    title: i18n.gettext("Credentials missing")
                    , msg: i18n.gettext("Please enter a username and password")
                    , buttons: Ext.MessageBox.OK
                    , icon: Ext.MessageBox.INFO
                });
            } else if (this.fireEvent("WPAKT.controller.core.ServerAvailability.isOnline", true)) {
                this.fireEvent("WPAKT.controller.core.loading.Mask.beginLoading", this.getCoreauthenticationloginmain(), "Please wait, authenticating...");
                this.consoleLog("doFormLogin() - Checks ok, sending credentials to server");
                var currentUser = this.getCoreServerAvailabilityStore().last();
                var serverUrl = "/" + symfonyEnv + "/authentication/login";
                this.fireEvent("WPAKT.controller.core.BackgroundActivities.startAjaxLoading");
                Ext.Ajax.request({
                    url: serverUrl,
                    timeout: 10000,
                    params: {
                        USERNAME: formUsername
                        , PASSWORD: formPassword
                        , REMEMBERME: formRememberMe
                    },
                    success: function(response){
                        scope.fireEvent("WPAKT.controller.core.BackgroundActivities.endAjaxLoading");
                        scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreauthenticationloginmain());
                        //console.log(response);
                        var serverResponse = Ext.decode(response.responseText, true);
                        if (serverResponse !== null) {
                            if (serverResponse.authentication === "SUCCESS") {
                                currentUser.set("USERNAME", serverResponse.USERNAME);
                                currentUser.set("AUTHENTICATED", "Y");
                                scope.fireEvent("WPAKT.controller.dashboard.Status.loadStatus");
                                scope.fireEvent("WPAKT.controller.core.Navigation.loadNavigation");
                                scope.displayLoginWindow();
                                scope.redirectTo(scope.getPreviousRoute());
                            } else {
                                currentUser.set("USERNAME", "");
                                currentUser.set("AUTHENTICATED", "N");
                                Ext.MessageBox.show({
                                    title: i18n.gettext("Authentication Failed")
                                    , msg: serverResponse.message
                                    , buttons: Ext.MessageBox.OK
                                    , icon: Ext.MessageBox.ERROR
                                });
                            }
                        }
                    },
                    failure: function(response, opts) {
                        scope.fireEvent("WPAKT.controller.core.BackgroundActivities.endAjaxLoading");
                        scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreauthenticationloginmain());
                        console.log(response);
                        Ext.MessageBox.show({
                            title: i18n.gettext("Authentication Failed")
                            , msg: i18n.gettext("Unable to authenticate to remote server")
                            , buttons: Ext.MessageBox.OK
                            , icon: Ext.MessageBox.ERROR
                        });
                    }
                });

            }
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Unsecured connection")
                , msg: i18n.gettext("You connection is not encrypted, please use HTTPS")
                , buttons: Ext.MessageBox.OK
                , icon: Ext.MessageBox.WARNING
            });
        }
    }
    

});
