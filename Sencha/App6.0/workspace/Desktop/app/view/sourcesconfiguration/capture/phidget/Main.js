//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.phidget.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.phidget.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationcapturephidgetmain'

    , title: i18n.gettext('Phidgets sensors configuration')
    , collapsible: false
    , collapsed: false

    , padding: 5
    , layout: 'fit'
    , items: [{
        xtype: 'sourcesconfigurationcapturephidgetsensorslist'
    }]
});

