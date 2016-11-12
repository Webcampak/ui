/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.groups.shared.CustomersList");
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.shared.CustomersList", {
    extend: "Ext.form.ComboBox",
     
    alias : "widget.accesscontrolgroupssharedcustomerslist",
    
    store: "administrative.Customers",

    fieldLabel: i18n.gettext("Customer"),

    valueField: "CUS_ID",
    displayField: "CODE_NAME",
    queryMode: "local",
    hideLabel: true
});