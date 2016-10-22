/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.cameras.Main");
//</debug>
Ext.define("WPAKT.view.dashboard.cameras.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.dashboardcamerasmain"

    , cls: "quick-graph-panel shadow-panel"
    , headerPosition: "top"
    , height: 150
    , bodyPadding: 15
    , title: i18n.gettext("Cameras")
    , iconCls: "x-fa fa-camera-retro"
    

    , layout: {type: "vbox", align: "stretch"}
    , items: [
        {xtype: "dashboardcamerascamerastxt"}
    ]   
});

