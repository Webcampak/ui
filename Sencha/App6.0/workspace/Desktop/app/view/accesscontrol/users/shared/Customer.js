/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.shared.Customer");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.Customer", {
    extend: "Ext.form.ComboBox",
    alias : "widget.accesscontroluserssharedcustomer",

    store: "accesscontrol.customers.Customers",

    fieldLabel: i18n.gettext("Customer"),

    valueField: "CUS_ID",
    displayField: "NAME",
    queryMode: "local"
});