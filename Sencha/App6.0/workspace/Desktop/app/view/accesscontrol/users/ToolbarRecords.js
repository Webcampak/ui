/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.ToolbarRecords");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.ToolbarRecords", {
    extend: "Ext.toolbar.TextItem",
     
    alias : "widget.accesscontroluserstoolbarrecords",
    text: i18n.gettext("Empty")
});