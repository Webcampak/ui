/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.ToolbarRecords");
//</debug>
Ext.define("WPAKD.view.syncreports.ToolbarRecords", {
    extend: "Ext.toolbar.TextItem"
    , alias : "widget.syncreportstoolbarrecords"
    
    , text: i18n.gettext("Empty")
});