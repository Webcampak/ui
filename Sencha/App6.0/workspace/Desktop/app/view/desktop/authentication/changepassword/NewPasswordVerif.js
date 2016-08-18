//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.authentication.changepassword.NewPasswordVerif');
//</debug>
Ext.define("WPAKD.view.desktop.authentication.changepassword.NewPasswordVerif", {
    extend: 'Ext.form.field.Text',
    alias : 'widget.desktopauthenticationchangepasswordnewpasswordverif',

    fieldLabel: i18n.gettext('New Password (verif)'),

    allowBlank: false,
    inputType: 'password',    
    
    maxLength: 25
});