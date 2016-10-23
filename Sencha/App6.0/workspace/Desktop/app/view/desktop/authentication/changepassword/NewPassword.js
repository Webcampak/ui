/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.changepassword.NewPassword");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.changepassword.NewPassword", {
    extend: "Ext.form.field.Text",
    alias : "widget.desktopauthenticationchangepasswordnewpassword",

    fieldLabel: i18n.gettext("New Password"),
    
    allowBlank: false,
    inputType: "password",
    
    maxLength: 25
});