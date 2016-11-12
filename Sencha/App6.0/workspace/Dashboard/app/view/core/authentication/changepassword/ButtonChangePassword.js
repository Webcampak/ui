/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.changepassword.ButtonChangePassword");
//</debug>
Ext.define("WPAKT.view.core.authentication.changepassword.ButtonChangePassword", {
    extend: "Ext.button.Button"
    , alias : "widget.coreauthenticationchangepasswordbuttonchangepassword"

    , reference: "changepasswordButton"
    , scale: "large"
//    , ui: "soft-green"
    , iconAlign: "right"
    , iconCls: "x-fa fa-angle-right"
    , text: i18n.gettext("Change Password")
    , formBind: true
    //listeners: {
    //    click: "onLoginButton"
    //}
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKT.controller.core.authentication.ChangePassword.savePassword");
            }
        }
    }
});