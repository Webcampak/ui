/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.resetpassword.ButtonReset");
//</debug>
Ext.define("WPAKT.view.core.authentication.resetpassword.ButtonReset", {
    extend: "Ext.button.Button"
    , alias : "widget.coreauthenticationresetpasswordbuttonreset"

    , reference: "resetButton"
    , scale: "large"
//    , ui: "soft-green"
    , iconAlign: "right"
    , iconCls: "x-fa fa-angle-right"
    , text: i18n.gettext("Reset Password")
    , formBind: true
    //listeners: {
    //    click: "onLoginButton"
    //}
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKT.controller.core.authentication.ResetPassword.resetPassword");
            }
        }
    }
});