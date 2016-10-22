/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.sourcesconfigurationcapturemain"

    , title: i18n.gettext("Capture")
    , disabled: true
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {
        margin: 10
    }
    , items: [
        {xtype: "sourcesconfigurationcapturesourcemain"}
        , {xtype: "sourcesconfigurationcapturecalendarmain"}
        , {xtype: "sourcesconfigurationcapturegphotomain"}
        , {xtype: "sourcesconfigurationcapturewebcampakmain"}
        , {xtype: "sourcesconfigurationcaptureipcameramain"}
        , {xtype: "sourcesconfigurationcapturelinkmain"}
    ]
});

