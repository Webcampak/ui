/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.changepassword.OldPassword");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.changepassword.OldPassword", {
    extend: "Ext.form.field.Text",
    alias : "widget.desktopauthenticationchangepasswordoldpassword",

    fieldLabel: i18n.gettext("Old Password"),

    allowBlank: false,
    inputType: "password",
    
    maxLength: 25
});