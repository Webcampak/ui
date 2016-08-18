//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.systemconfiguration.general.Cfgxferthreads');
//</debug>
Ext.define('WPAKD.view.systemconfiguration.general.Cfgxferthreads', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.systemconfigurationgeneralcfgxferthreads'

    , fieldLabel: i18n.gettext('Number of Xfer transfer threads')
    , labelWidth: 200
    , minValue: 0
    , allowBlank: false    
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue', newValue, oldValue, 'cfgxferthreads');
        }
    }
});
