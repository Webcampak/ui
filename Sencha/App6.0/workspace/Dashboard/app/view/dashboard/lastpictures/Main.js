/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.lastpictures.Main");
//</debug>
Ext.define("WPAKT.view.dashboard.lastpictures.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.dashboardlastpicturesmain"

    , cls: "dashboard-main-chart shadow-panel"

    , bodyPadding: 15

    , title: i18n.gettext("Last pictures captured")
    , layout: {type: "vbox",align: "stretch"}
});

