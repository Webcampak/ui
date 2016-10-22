/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.videos.controls.date.Main");
//</debug>
Ext.define("WPAKT.view.videos.controls.date.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.videoscontrolsdatemain"

    , cls: "quick-graph-panel shadow-panel"
    //, layout: "fit"
    , headerPosition: "top"
    , iconCls: "x-fa fa-calendar"
    , title: i18n.gettext("Date & Time")
    , layout: {type: "vbox",align: "stretch"}    
    , items: [
        {xtype: "videoscontrolsdatedatepicker"}
    ]   
});
