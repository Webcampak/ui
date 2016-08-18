//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgemailerroractivate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.source.Cfgemailerroractivate', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationcapturesourcecfgemailerroractivate'

    , fieldLabel: i18n.gettext('Email alerts')
    , uncheckedValue: 'no'
    , inputValue: 'yes'

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue', newValue, oldValue, 'cfgemailerroractivate')
        }
    }
});

