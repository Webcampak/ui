/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.resetpassword.Email");
//</debug>
Ext.define("WPAKT.view.core.authentication.resetpassword.Email", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreauthenticationresetpasswordemail"

    , cls: "auth-textbox"
    , height: 55
    , name: "email"
    , hideLabel: true
    , allowBlank: false
    , emptyText: i18n.gettext("user@example.com")
    , vtype: "email"
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