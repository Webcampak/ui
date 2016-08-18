//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgetfailure');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgetfailure', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationadvancedphidgetcfgphidgetfailure'

    , fieldLabel: i18n.gettext('Number of failure before camera powercycle')
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgphidgetfailure')
        }
    }
});
