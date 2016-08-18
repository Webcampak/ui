//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.changepassword.NewPassword');
//</debug>
Ext.define("WPAKT.view.core.authentication.changepassword.NewPassword", {
    extend: 'Ext.form.field.Text'
    , alias : 'widget.coreauthenticationchangepasswordnewpassword'

    , cls: 'auth-textbox'
    , height: 55
    , hideLabel: true
    , emptyText: i18n.gettext('New Password')
    , inputType: 'password'
    , name: 'currentpassword'
    , allowBlank : false
    , triggers: {
        glyphed: {
            cls: 'trigger-glyph-noop auth-password-trigger'
        }
    }
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
                this.fireEvent('WPAKT.controller.core.authentication.ChangePassword.savePassword');
            }
        }
    }
});