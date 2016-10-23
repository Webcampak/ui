/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.sensors.PhidgetsPortsList");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.sensors.PhidgetsPortsList", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationphidgetssensorsphidgetsportslist"

    , store: "sourcesconfiguration.PhidgetSensors"

    , valueField: "ID"
    , displayField: "NAME"
    , queryMode: "local"
    , hideLabel: true
    , allowBlank: true
    , emptyText: i18n.gettext("Disabled")
});