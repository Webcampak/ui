/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.Search");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.Search", {
    extend: "Ext.form.field.Text",
     
    alias : "widget.accesscontroluserssearch",

    width: 200,
    hideLabel: true,
    emptyText: i18n.gettext("Filter by Name or Username")
});