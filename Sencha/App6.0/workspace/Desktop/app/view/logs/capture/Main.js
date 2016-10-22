/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.capture.Main");
//</debug>
Ext.define("WPAKD.view.logs.capture.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.logscapturemain"

    , title: i18n.gettext("Capture")
    , disabled: false
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {margin: 10}
    , items: [
        {xtype: "logscapturecapturelogs"}
    ]
});

