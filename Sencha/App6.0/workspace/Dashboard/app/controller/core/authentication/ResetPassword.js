/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.authentication.ResetPassword");
//</debug>
/*
 * Handle the reset password form submission
 */
Ext.define("WPAKT.controller.core.authentication.ResetPassword", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [
        "core.authentication.login.Main"
        , "core.authentication.resetpassword.Main"
        , "core.authentication.resetpassword.ButtonReset"
        , "core.authentication.resetpassword.Email"
        , "core.authentication.resetpassword.Label"
        , "core.authentication.resetpassword.Username"
        
    ]

    , refs: [
        {ref: "coreauthenticationloginmain",                    selector: "coreauthenticationloginmain"                }
        , {ref: "coreauthenticationchangepasswordmain",         selector: "coreauthenticationchangepasswordmain"       }
        , {ref: "coreauthenticationprofilemain",                selector: "coreauthenticationprofilemain"              }
        , {ref: "coreauthenticationresetpasswordmain",          selector: "coreauthenticationresetpasswordmain",       autoCreate: true,   xtype: "coreauthenticationresetpasswordmain"         }
        , {ref: "coreauthenticationresetpasswordbuttonreset",   selector: "coreauthenticationresetpasswordbuttonreset" }
        , {ref: "coreauthenticationresetpasswordemail",         selector: "coreauthenticationresetpasswordemail"       }
        , {ref: "coreauthenticationresetpasswordlabel",         selector: "coreauthenticationresetpasswordlabel"       }
        , {ref: "coreauthenticationresetpasswordusername",      selector: "coreauthenticationresetpasswordusername"    }

    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "*": {
                "WPAKT.controller.core.authentication.ResetPassword.resetPassword": this.resetPassword
            }              
            , "coreauthenticationresetpasswordbuttonreset": {click:  this.resetPassword    }
        });
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.core.authentication.ResetPassword.showResetPassword": this.showResetPassword
                  }
             }
        });         
    }

    , onLaunch: function() {

    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->ResetPassword: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    /*
     * Show the reset password window
     */
    , showResetPassword: function() {
        this.consoleLog("showResetPassword()");
        this.getCoreauthenticationloginmain().hide();
        this.getCoreauthenticationresetpasswordmain().show();   
        this.getCoreauthenticationchangepasswordmain().hide();   
        this.getCoreauthenticationprofilemain().hide();          
    }
    
    /*
     * Handle the reset password form submission
     */
    , resetPassword: function() {
        this.consoleLog("resetPassword()");
        var scope = this;
        var formUsername = this.getCoreauthenticationresetpasswordusername().getValue();
        var formEmail = this.getCoreauthenticationresetpasswordemail().getValue();
        if (formUsername.length < 2 || formEmail.length < 2) {
            Ext.MessageBox.show({
                title: i18n.gettext("Credentials missing")
                , msg: i18n.gettext("Please enter a username and email")
                , buttons: Ext.MessageBox.OK
                , icon: Ext.MessageBox.INFO
            });
        } else if (this.fireEvent("WPAKT.controller.core.ServerAvailability.isOnline", true)) {
            this.fireEvent("WPAKT.controller.core.loading.Mask.beginLoading", this.getCoreauthenticationresetpasswordmain(), "Please wait, resetting password...");
            var serverUrl = "/" + symfonyEnv + "/resetpassword";
            this.fireEvent("WPAKT.controller.core.BackgroundActivities.startAjaxLoading");
            Ext.Ajax.request({
                url: serverUrl
                , timeout: 10000
                , params: {
                    username: formUsername
                    , email: formEmail
                    , SENCHA_APP: "WPAKT"
                }
                , success: function(response){
                    scope.consoleLog("resetPassword(): AJAX call successful");
                    scope.fireEvent("WPAKT.controller.core.BackgroundActivities.endAjaxLoading");
                    scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreauthenticationresetpasswordmain());
                    var serverResponse = Ext.decode(response.responseText, true);
                    if (serverResponse !== null) {
                        if (serverResponse.authentication == "SUCCESS") {
                            Ext.MessageBox.show({
                                title: i18n.gettext("Password sent")
                                , msg: i18n.gettext("A temporary password has been sent to your email address")
                                , buttons: Ext.MessageBox.OK
                                , icon: Ext.MessageBox.INOF
                            });
                            scope.redirectTo("auth/login"); // Redirect to the login window
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
                    scope.consoleLog("resetPassword(): AJAX call failed");
                    scope.fireEvent("WPAKT.controller.core.BackgroundActivities.endAjaxLoading");
                    scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreauthenticationresetpasswordmain());
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

});