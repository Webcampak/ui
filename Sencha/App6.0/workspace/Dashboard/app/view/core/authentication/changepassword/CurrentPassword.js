/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.changepassword.CurrentPassword");
//</debug>
Ext.define("WPAKT.view.core.authentication.changepassword.CurrentPassword", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreauthenticationchangepasswordcurrentpassword"

    , cls: "auth-textbox"
    , height: 55
    , hideLabel: true
    , emptyText: i18n.gettext("Current Password")
    , inputType: "password"
    , name: "currentpassword"
    , allowBlank : false
    , triggers: {
        glyphed: {
            cls: "trigger-glyph-noop auth-password-trigger"
        }
    }
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKT.controller.core.authentication.ChangePassword.savePassword");
            }
        }
    } 
});

