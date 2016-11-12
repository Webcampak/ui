/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.sourcesstatus.Main");
//</debug>
Ext.define("WPAKT.view.dashboard.sourcesstatus.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.dashboardsourcesstatusmain"

    , cls: "dashboard-main-chart shadow-panel"

    , bodyPadding: 15

    , tools: [
        {xtype: "dashboardsourcesstatusrefreshtool"}
    ]

    , title: i18n.gettext("Last pictures captured")
    , layout: {type: "vbox",align: "stretch"}
});
