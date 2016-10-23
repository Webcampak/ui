/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.capturestats.Main");
//</debug>
Ext.define("WPAKT.view.dashboard.capturestats.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.dashboardcapturestatsmain"

    , cls: "dashboard-main-chart shadow-panel"
    , height: 200

    , bodyPadding: 15

    , title: i18n.gettext("Capture Statistics per source")
    , layout: {type: "vbox",align: "stretch"}

    , items: [{
        xtype: "container"
        , flex: 1
        , layout: "fit"
        , items: [{
            xtype: "dashboardcapturestatscapturechart"
        }]
    }]  
});

