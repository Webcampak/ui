/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.shared.ChangePwdFlag");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.ChangePwdFlag", {
    extend: "Ext.form.field.Checkbox",
     
    alias : "widget.accesscontroluserssharedchangepwdflag",
    
    fieldLabel: i18n.gettext("Change Password next Logon"),
    boxLabel: "",
    width: 30,
    inputValue: "Y",
    uncheckedValue: "N"
});