/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.shared.Email");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.Email", {
    extend: "Ext.form.field.Text",
     
    alias : "widget.accesscontroluserssharedemail",
                  
    fieldLabel: i18n.gettext("email"),
    allowBlank: false,
    vtype: "email",
    maxLength: 100,
    minLength: 3
});