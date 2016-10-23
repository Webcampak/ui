/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.sourcesconfigurationphidgetsmain"

    , title: i18n.gettext("Phidgets")
    , disabled: true
    , scroll: true
    , autoScroll: true
    , defaults: {margin: 10}
    , items: [
        {xtype: "sourcesconfigurationphidgetsrelaysmain"}
        , {xtype: "sourcesconfigurationphidgetsgraphsmain"}
        , {xtype: "sourcesconfigurationphidgetssensorsmain"}
    ]
});

