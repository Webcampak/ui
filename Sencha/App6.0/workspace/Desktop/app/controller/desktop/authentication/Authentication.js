/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.authentication.Authentication");
//</debug>
Ext.define("WPAKD.controller.desktop.authentication.Authentication", {
    extend: "Ext.app.Controller",

    stores: [
        "desktop.authentication.Users"

    ],

    models: [
        "desktop.authentication.Users"

    ],

    views: [
        "desktop.authentication.Main"
        , "desktop.authentication.ButtonConnect"
        , "desktop.authentication.ButtonRecoverPassword"
        , "desktop.authentication.Password"
        , "desktop.authentication.Username"
        , "desktop.authentication.RememberMe"
        , "desktop.authentication.lostpassword.Main"
        , "desktop.authentication.lostpassword.Email"
        , "desktop.authentication.lostpassword.Username"
        , "desktop.authentication.lostpassword.ButtonSendPassword"

    ],

    refs: [
        {ref: "desktopauthenticationmain",                              selector: "desktopauthenticationmain",                          autoCreate: true,   xtype: "desktopauthenticationmain" }
        , {ref: "desktopauthenticationbuttonrecoverpassword",           selector: "desktopauthenticationbuttonrecoverpassword"          }
        , {ref: "desktopauthenticationbuttonconnect",                   selector: "desktopauthenticationbuttonconnect"                  }
        , {ref: "desktopauthenticationpassword",                        selector: "desktopauthenticationpassword"                       }
        , {ref: "desktopauthenticationusername",                        selector: "desktopauthenticationusername"                       }
        , {ref: "desktopauthenticationrememberme",                      selector: "desktopauthenticationrememberme"                     }
        , {ref: "desktopauthenticationlostpasswordmain",                selector: "desktopauthenticationlostpasswordmain",              autoCreate: true,   xtype: "desktopauthenticationlostpasswordmain" }
        , {ref: "desktopauthenticationlostpasswordusername",            selector: "desktopauthenticationlostpasswordusername"           }
        , {ref: "desktopauthenticationlostpasswordemail",               selector: "desktopauthenticationlostpasswordemail"              }
        , {ref: "desktopauthenticationlostpasswordbuttonsendpassword",  selector: "desktopauthenticationlostpasswordbuttonsendpassword" }
    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Authentication: Controller init: function()");
        this.control({
            "*": {
                "WPAKD.controller.desktop.Authentication.doFormLogin":          this.doFormLogin
                , "WPAKD.controller.desktop.Authentication.doFormLostPassword": this.doFormLostPassword
            }
            , "desktopauthenticationbuttonconnect":                  {click:  this.doFormLogin           }
            , "desktopauthenticationbuttonrecoverpassword":          {click:  this.openPasswordRecovery  }
            , "desktopauthenticationlostpasswordbuttonsendpassword": {click:  this.doFormLostPassword    }

        });
        this.listen({
             controller: {
                  "*": {
                      "WPAKD.controller.desktop.Authentication.displayLoginWindow": this.displayLoginWindow
                      , "WPAKD.controller.desktop.Authentication.userLoggedOffOnServer": this.userLoggedOffOnServer
                      //, "WPAKD.controller.desktop.Authentication.doReAuthenticate": this.doReAuthenticate
                      , "WPAKD.controller.desktop.Authentication.isAuthenticated": this.isAuthenticated
                  }
             },
             store: {
                  "*": {"WPAKD.controller.desktop.Authentication.isAuthenticated": this.isAuthenticated}
             }

        });
    }
//http://hasin.me/2013/10/27/how-to-login-a-user-programatically-in-symfony2/
// See mobileAPI router line 70 for example implementation
    , onLaunch: function() {
        var scope = this;
        this.getDesktopAuthenticationUsersStore().add({USERNAME: "", AUTHENTICATED: "N"});
        if (this.getDesktopauthenticationmain() === undefined) {
            this.consoleLog("onLaunch() - App not initialized yet");
            setTimeout(function() {
                scope.onLaunch();
            },100);
        } else {
            this.consoleLog("onLaunch() - App initialized, firing event");
            Ext.getBody().mask("Please wait, starting application ...");
            this.fireEvent("WPAKD.controller.desktop.ServerAvailability.checkOnlineStatus", true);
        }
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Authentication: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , isAuthenticated: function() {
        this.consoleLog("isAuthenticated()");
        var currentUser = this.getDesktopAuthenticationUsersStore().first();
        if (currentUser !== undefined && currentUser.get("AUTHENTICATED") == "N") {
            return false;
        } else {
            return true;
        }
    }

    , userLoggedOffOnServer: function() {
        this.consoleLog("userLoggedOffOnServer()");
        this.getDesktopauthenticationmain().show();
        this.getDesktopauthenticationmain().toFront();
        Ext.MessageBox.show({
            title: i18n.gettext("Authentication Error")
            , msg: i18n.gettext("You have been logged off from the server. <br />Please log-in again")
            , buttons: Ext.MessageBox.OK
            , icon: Ext.MessageBox.ERROR
        });
    }

    , displayLoginWindow: function() {
        this.consoleLog("displayLoginWindow()");
        Ext.getBody().unmask();
        this.fireEvent("WPAKD.controller.desktop.loading.Mask.endLoading", this.getDesktopauthenticationmain());
        var currentUser = this.getDesktopAuthenticationUsersStore().first();
        if (currentUser.get("AUTHENTICATED") == "N") {
            this.getDesktopauthenticationmain().show();
            this.getDesktopauthenticationmain().toFront();
            //this.fireEvent("WPAKD.controller.desktop.icons.Icons.hideIcons");
        } else {
            this.getDesktopauthenticationmain().hide();
            var scope = this;
            this.fireEvent("WPAKD.controller.desktop.authentication.UserSettings.loadUserSettingsStore");
            /*
            setTimeout(function() {
                scope.fireEvent("WPAKD.controller.desktop.icons.Icons.reloadIconsLaunch");
            },500);
            */
        }
    }

    , doFormLogin: function() {
        this.consoleLog("doFormLogin()");
        var scope = this;
        if (document.location.protocol == "https:") {
            var formUsername = this.getDesktopauthenticationusername().getValue();
            var formPassword = this.getDesktopauthenticationpassword().getValue();
            var formRememberMe = this.getDesktopauthenticationrememberme().getValue();
            if (formRememberMe == true) {formRememberMe = "Y";}
            else {formRememberMe = "N";}
            if (formUsername.length < 2 || formPassword.length < 2) {
                Ext.MessageBox.show({
                    title: i18n.gettext("Credentials missing")
                    , msg: i18n.gettext("Please enter a username and password")
                    , buttons: Ext.MessageBox.OK
                    , icon: Ext.MessageBox.INFO
                });
            } else if (this.fireEvent("WPAKD.controller.desktop.ServerAvailability.isOnline", true)) {
                this.fireEvent("WPAKD.controller.desktop.loading.Mask.beginLoading", this.getDesktopauthenticationmain(), "Please wait, authenticating...");
                this.consoleLog("doFormLogin() - Checks ok, sending credentials to server");
                var currentUser = this.getDesktopAuthenticationUsersStore().first();
                var serverUrl = window.location.href;
                var serverUrl = serverUrl.replace("mobile","");
                var serverUrl = serverUrl + "/../authentication/login";
                this.fireEvent("WPAKD.controller.desktop.BackgroundActivities.startAjaxLoading");
                Ext.Ajax.request({
                    url: serverUrl,
                    timeout: 10000,
                    params: {
                        USERNAME: formUsername
                        , PASSWORD: formPassword
                        , REMEMBERME: formRememberMe
                    },
                    success: function(response){
                        scope.fireEvent("WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading");
                        scope.fireEvent("WPAKD.controller.desktop.loading.Mask.endLoading", scope.getDesktopauthenticationmain());
                        //console.log(response);
                        var serverResponse = Ext.decode(response.responseText, true);
                        if (serverResponse !== null) {
                            if (serverResponse.authentication == "SUCCESS") {
                                currentUser.set("USERNAME", serverResponse.USERNAME);
                                currentUser.set("AUTHENTICATED", "Y");
                                scope.displayLoginWindow();
                                //scope.fireEvent("WPAKD.controller.desktop.icons.Icons.reloadIconsLaunch");
                                scope.fireEvent("WPAKD.controller.desktop.menu.Menu.reloadMenus");
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
                        scope.fireEvent("WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading");
                        scope.fireEvent("WPAKD.controller.desktop.loading.Mask.endLoading", scope.getDesktopauthenticationmain());
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
                , msg: i18n.gettext("Your connection is not encrypted, please use HTTPS")
                , buttons: Ext.MessageBox.OK
                , icon: Ext.MessageBox.WARNING
            });
        }
    }

    , doFormLostPassword: function() {
        this.consoleLog("doFormLostPassword()");
        var scope = this;
        var formUsername = this.getDesktopauthenticationlostpasswordusername().getValue();
        var formEmail = this.getDesktopauthenticationlostpasswordemail().getValue();
        if (formUsername.length < 2 || formEmail.length < 2) {
            Ext.MessageBox.show({
                title: i18n.gettext("Credentials missing")
                , msg: i18n.gettext("Please enter a username and email")
                , buttons: Ext.MessageBox.OK
                , icon: Ext.MessageBox.INFO
            });
        } else if (this.fireEvent("WPAKD.controller.desktop.ServerAvailability.isOnline", true)) {
            this.fireEvent("WPAKD.controller.desktop.loading.Mask.beginLoading", this.getDesktopauthenticationlostpasswordmain(), "Please wait, resetting password...");
            var serverUrl = window.location.href;
            var serverUrl = serverUrl.replace("mobile","");
            var serverUrl = serverUrl + "/../resetpassword";
            this.fireEvent("WPAKD.controller.desktop.BackgroundActivities.startAjaxLoading");
            Ext.Ajax.request({
                url: serverUrl
                , timeout: 10000
                , params: {
                    username: formUsername
                    , email: formEmail
                    , SENCHA_APP: "WPAKD"
                }
                , success: function(response){
                    scope.fireEvent("WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading");
                    scope.fireEvent("WPAKD.controller.desktop.loading.Mask.endLoading", scope.getDesktopauthenticationlostpasswordmain());
                    var serverResponse = Ext.decode(response.responseText, true);
                    if (serverResponse !== null) {
                        if (serverResponse.authentication == "SUCCESS") {
                            Ext.MessageBox.show({
                                title: i18n.gettext("Password sent")
                                , msg: i18n.gettext("A temporary password has been sent to your email address")
                                , buttons: Ext.MessageBox.OK
                                , icon: Ext.MessageBox.INOF
                            });
                            scope.getDesktopauthenticationlostpasswordmain().hide();
                        } else {
                            Ext.MessageBox.show({
                                title: i18n.gettext("Unable to validate account")
                                , msg: serverResponse.message
                                , buttons: Ext.MessageBox.OK
                                , icon: Ext.MessageBox.ERROR
                            });
                        }
                    }
                }
                , failure: function(response, opts) {
                    scope.fireEvent("WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading");
                    scope.fireEvent("WPAKD.controller.desktop.loading.Mask.endLoading", scope.getDesktopauthenticationlostpasswordmain());
                    console.log(response);
                    Ext.MessageBox.show({
                        title: i18n.gettext("Password reset failed")
                        , msg: i18n.gettext("Unable to communicate with to remote server")
                        , buttons: Ext.MessageBox.OK
                        , icon: Ext.MessageBox.ERROR
                    });
                }
            });
        }
    }

    , openPasswordRecovery: function() {
        this.consoleLog("openPasswordRecovery()");
        this.getDesktopauthenticationlostpasswordmain().show();
    }
});