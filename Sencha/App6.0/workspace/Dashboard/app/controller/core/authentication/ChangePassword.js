/*global Ext, i18n, symfonyEnv*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.authentication.ChangePassword");
//</debug>
/*
 * This controller handles the form used by the user to change its password
 */
Ext.define("WPAKT.controller.core.authentication.ChangePassword", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [        
        "core.authentication.login.Main"
        , "core.authentication.resetpassword.Main"
        , "core.authentication.profile.Main"
        
        , "core.authentication.changepassword.Main"
        , "core.authentication.changepassword.ButtonChangePassword"
        , "core.authentication.changepassword.ButtonCancel"
        , "core.authentication.changepassword.CurrentPassword"
        , "core.authentication.changepassword.Label"
        , "core.authentication.changepassword.NewPassword"
        , "core.authentication.changepassword.NewPasswordConfirmation"
        
    ]

    , refs: [
        {ref: "coreauthenticationmain",                                    selector: "coreauthenticationmain"                                 }
        , {ref: "coreauthenticationloginmain",                             selector: "coreauthenticationloginmain"                            }
        , {ref: "coreauthenticationresetpasswordmain",                     selector: "coreauthenticationresetpasswordmain"                    }
        , {ref: "coreauthenticationprofilemain",                           selector: "coreauthenticationprofilemain"                          }
        , {ref: "coreauthenticationchangepasswordmain",                    selector: "coreauthenticationchangepasswordmain",                  autoCreate: true,   xtype: "coreauthenticationchangepasswordmain"}
        , {ref: "coreauthenticationchangepasswordbuttonchangepassword",    selector: "coreauthenticationchangepasswordbuttonchangepassword"   }
        , {ref: "coreauthenticationchangepasswordbuttoncancel",            selector: "coreauthenticationchangepasswordbuttoncancel"           }
        , {ref: "coreauthenticationchangepasswordcurrentpassword",         selector: "coreauthenticationchangepasswordcurrentpassword"        }
        , {ref: "coreauthenticationchangepasswordnewpassword",             selector: "coreauthenticationchangepasswordnewpassword"            }
        , {ref: "coreauthenticationchangepasswordnewpasswordconfirmation", selector: "coreauthenticationchangepasswordnewpasswordconfirmation"}

    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "*": {
                "WPAKT.controller.core.authentication.ChangePassword.savePassword": this.savePassword
            }                        
            , "coreauthenticationchangepasswordbuttonchangepassword":  {click:      this.savePassword    }
        });
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.core.authentication.ChangePassword.showChangePassword": this.showChangePassword
                  }
             }
        });     
    }

    , onLaunch: function() {

    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->ChangePassword: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    /*
     * Display the change password form
     */
    , showChangePassword: function() {
        this.consoleLog("showChangePassword()");
        this.getCoreauthenticationmain().show();
        this.getCoreauthenticationloginmain().hide();
        this.getCoreauthenticationresetpasswordmain().hide();   
        this.getCoreauthenticationprofilemain().hide();   
        this.getCoreauthenticationchangepasswordmain().show();    
    }

    /*
     * Handle submission of the change password form
     */
    , savePassword: function() {
        this.consoleLog("savePassword()");
        if (this.getCoreauthenticationchangepasswordnewpassword().getValue() === this.getCoreauthenticationchangepasswordnewpasswordconfirmation().getValue()) {
            var scope = this;
            if (document.location.protocol === "https:") {
                var formOldPassword = this.getCoreauthenticationchangepasswordcurrentpassword().getValue();
                var formNewPassword = this.getCoreauthenticationchangepasswordnewpassword().getValue();
                if (formOldPassword.length < 4 || formNewPassword.length < 4) {
                    Ext.MessageBox.show({
                        title: i18n.gettext("Credentials missing"),
                        msg: i18n.gettext("Please enter proper passwords (4 chars min.)"),
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                } else if (this.fireEvent("WPAKT.controller.core.ServerAvailability.isOnline", true)) {
                    this.fireEvent("WPAKT.controller.core.loading.Mask.beginLoading", this.getCoreauthenticationchangepasswordmain(), "Please wait, updating password...");
                    this.consoleLog("savePassword(): Checks ok, sending credentials to server");
                    var serverUrl = "/" + symfonyEnv + "/changepassword";
                    this.fireEvent("WPAKT.controller.core.BackgroundActivities.startAjaxLoading");
                    Ext.Ajax.request({
                        url: serverUrl,
                        timeout: 10000,
                        params: {
                            OLDPASSWORD: formOldPassword
                            , NEWPASSWORD: formNewPassword
                        },
                        success: function(response){
                            scope.fireEvent("WPAKT.controller.core.BackgroundActivities.endAjaxLoading");
                            scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreauthenticationchangepasswordmain());
                            console.log(response);
                            var serverResponse = Ext.decode(response.responseText, true);
                            if (serverResponse !== null) {
                                if (serverResponse.status === "SUCCESS") {
                                    Ext.MessageBox.show({
                                        title: i18n.gettext("Password"),
                                        msg: i18n.gettext("Password modification successful"),
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.INFO
                                    });
                                    scope.getCoreauthenticationmain().hide();
                                } else {
                                    Ext.MessageBox.show({
                                        title: i18n.gettext("Unable to change password"),
                                        msg:  i18n.gettext(serverResponse.message),
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                            }
                        },
                        failure: function(response, opts) {
                            scope.fireEvent("WPAKT.controller.core.BackgroundActivities.endAjaxLoading");
                            scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreauthenticationchangepasswordmain());
                            console.log(response);
                            Ext.MessageBox.show({
                                title: i18n.gettext("Password modification Failed"),
                                msg: i18n.gettext("Unable to authenticate to remote server"),
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    });

                }

            } else {
                Ext.MessageBox.show({
                    title: i18n.gettext("Unsecured connections"),
                    msg: i18n.gettext("You connection is not encrypted, transmitting your credentials in clear-text"),
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.WARNING
                });
            }
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Error"),
                msg: i18n.gettext("Password do not match"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }
    }

});