/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.login.Password");
//</debug>
Ext.define("WPAKT.view.core.authentication.login.Password", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreauthenticationloginpassword"

    , cls: "auth-textbox"
    , height: 55
    , hideLabel: true
    , emptyText: i18n.gettext("Password")
    , inputType: "password"
    , name: "password"
    , allowBlank : false
    , triggers: {
        glyphed: {
            cls: "trigger-glyph-noop auth-password-trigger"
        }
    }
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKT.controller.core.authentication.Authentication.doFormLogin");
            }
        }
    }    

});