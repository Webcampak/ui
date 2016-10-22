/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.xferreports.ToolbarRecords");
//</debug>
Ext.define("WPAKD.view.xferreports.ToolbarRecords", {
    extend: "Ext.toolbar.TextItem"     
    , alias : "widget.xferreportstoolbarrecords"
    
    , text: i18n.gettext("Empty")
});