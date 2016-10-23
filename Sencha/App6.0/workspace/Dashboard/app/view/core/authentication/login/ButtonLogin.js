/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.login.ButtonLogin");
//</debug>
Ext.define("WPAKT.view.core.authentication.login.ButtonLogin", {
    extend: "Ext.button.Button"
    , alias : "widget.coreauthenticationloginbuttonlogin"

    , reference: "loginButton"
    , scale: "large"
//    , ui: "soft-green"
    , iconAlign: "right"
    , iconCls: "x-fa fa-angle-right"
    , text: i18n.gettext("Login")
    , formBind: true
    //listeners: {
    //    click: "onLoginButton"
    //}
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKT.controller.core.authentication.Authentication.doFormLogin");
            }
        }
    }      

});