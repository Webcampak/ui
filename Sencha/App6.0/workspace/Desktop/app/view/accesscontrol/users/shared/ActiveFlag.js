/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.shared.ActiveFlag");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.ActiveFlag", {
    extend: "Ext.form.field.Checkbox",
     
    alias : "widget.accesscontroluserssharedactiveflag",
    
    fieldLabel: i18n.gettext("Active"),
    boxLabel: "",
    width: 30,
    checked: true,    
    inputValue: "Y",
    uncheckedValue: "N"
});