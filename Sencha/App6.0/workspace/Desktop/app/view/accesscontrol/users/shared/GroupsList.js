/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.shared.GroupsList");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.GroupsList", {
    extend: "Ext.form.ComboBox",

    alias : "widget.accesscontroluserssharedgroupslist",

    store: "accesscontrol.groups.Groups",

    fieldLabel: i18n.gettext("Group"),

    valueField: "GRO_ID",
    displayField: "NAME",
    queryMode: "local",
    hideLabel: true
});