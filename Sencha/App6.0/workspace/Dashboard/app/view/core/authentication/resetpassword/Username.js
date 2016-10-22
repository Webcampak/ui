/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.resetpassword.Username");
//</debug>
Ext.define("WPAKT.view.core.authentication.resetpassword.Username", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreauthenticationresetpasswordusername"

    , cls: "auth-textbox"

    , height: 55
    , hideLabel: true
    , allowBlank : false
    , emptyText: i18n.gettext("Enter Username")
    , triggers: {
        glyphed: {
            cls: "trigger-glyph-noop auth-email-trigger"
        }
    }
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
                this.fireEvent("WPAKT.controller.core.authentication.ResetPassword.resetPassword");
            }
        }
    }    
});