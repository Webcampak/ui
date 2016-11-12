/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.sensors.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.sensors.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationphidgetssensorsmain"

    , title: i18n.gettext("Sensors configuration")
    , collapsible: false
    , collapsed: false

    , padding: 5
    , layout: "fit"
    , items: [{
        xtype: "sourcesconfigurationphidgetssensorssensorslist"
    }]
});

