//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgftpphidgetserverretry');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgftpphidgetserverretry', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationadvancedphidgetcfgftpphidgetserverretry'

    , fieldLabel: i18n.gettext('Number of retries')
    , allowBlank: false
    , minValue: 0
    , maxValue: 4
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgftpphidgetserverretry')
        }
    }
});
