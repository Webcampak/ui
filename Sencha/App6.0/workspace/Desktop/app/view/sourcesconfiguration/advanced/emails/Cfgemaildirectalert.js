//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemaildirectalert');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemaildirectalert', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationadvancedemailscfgemaildirectalert'

    , fieldLabel: i18n.gettext('In-line email alert')
    , boxLabel: i18n.gettext('Email alerts will be sent directly based on capture status')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgemaildirectalert');
        }
    }
});

