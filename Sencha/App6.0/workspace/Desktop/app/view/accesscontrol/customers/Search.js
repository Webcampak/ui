/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.customers.Search");
//</debug>
Ext.define("WPAKD.view.accesscontrol.customers.Search", {
    extend: "Ext.form.field.Text",
     
    alias : "widget.accesscontrolcustomerssearch",

    width: 200,
    hideLabel: true,
    emptyText: i18n.gettext("Filter by Name")
});