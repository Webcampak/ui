/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.shared.CustomersList");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.CustomersList", {
    extend: "Ext.form.ComboBox",
    alias : "widget.accesscontroluserssharedcustomerslist",

    store: "accesscontrol.customers.Customers",

    fieldLabel: i18n.gettext("Customer"),

    valueField: "CUS_ID",
    displayField: "NAME",
    queryMode: "local",
    hideLabel: true
});