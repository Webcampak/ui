//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgeterroractivate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgeterroractivate', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationadvancedphidgetcfgphidgeterroractivate'

    , fieldLabel: i18n.gettext('Powercycle camera in case of failure')
    , uncheckedValue: 'off'
    , inputValue: 'on'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}            
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgphidgeterroractivate')
        }
    }
});

