/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.sources.Search");
//</debug>
Ext.define("WPAKD.view.accesscontrol.sources.Search", {
    extend: "Ext.form.field.Text",
     
    alias : "widget.accesscontrolsourcessearch",

    width: 200,
    hideLabel: true,
    emptyText: i18n.gettext("Filter by Name")
});