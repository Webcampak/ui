//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgetcameraport');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgetcameraport', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationadvancedphidgetcfgphidgetcameraport'

    , fieldLabel: i18n.gettext('Phidget camera port')
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgphidgetcameraport')
        }
    }
});
