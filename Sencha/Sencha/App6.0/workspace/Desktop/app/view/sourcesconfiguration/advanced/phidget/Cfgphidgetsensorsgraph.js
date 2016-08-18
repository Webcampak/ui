//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgetsensorsgraph');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.phidget.Cfgphidgetsensorsgraph', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationadvancedphidgetcfgphidgetsensorsgraph'

    , fieldLabel: i18n.gettext('Generate Phidget sensor graph')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgphidgetsensorsgraph');
        }
    }
});

