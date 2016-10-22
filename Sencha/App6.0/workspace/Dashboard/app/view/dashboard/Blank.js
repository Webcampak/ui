/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.Blank");
//</debug>
Ext.define("WPAKT.view.dashboard.Blank", {
    extend: "Ext.panel.Panel"
    , alias: "widget.dashboardblank"

    , cls: "quick-graph-panel shadow-panel",
    height: 130,
    layout: "fit",
    headerPosition: "top",
    iconCls: "x-fa fa-power-off",

    title: "Blank",
    items: [
        {xtype: "container"}
    ]   
});
