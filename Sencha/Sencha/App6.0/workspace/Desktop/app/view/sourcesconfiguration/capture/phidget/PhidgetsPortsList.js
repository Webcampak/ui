//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.phidget.PhidgetsPortsList');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.phidget.PhidgetsPortsList", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationcapturephidgetphidgetsportslist'

    , store: 'sourcesconfiguration.PhidgetSensors'

    , valueField: 'ID'
    , displayField: 'NAME'
    , queryMode: 'local'
    , hideLabel: true
    , allowBlank: true
    , emptyText: i18n.gettext('Disabled')
});