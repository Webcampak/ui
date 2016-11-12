/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.shared.Firstname");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.Firstname", {
    extend: "Ext.form.field.Text",

    alias : "widget.accesscontroluserssharedfirstname",

    fieldLabel: i18n.gettext("Firstname"),
    allowBlank: false,
    maxLength: 25,
    minLength: 3
});