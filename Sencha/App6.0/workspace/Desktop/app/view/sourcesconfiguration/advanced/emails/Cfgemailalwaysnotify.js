//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailalwaysnotify');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailalwaysnotify', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationadvancedemailscfgemailalwaysnotify'

    , fieldLabel: i18n.gettext('Always notify when source is back')
//    , boxLabel: i18n.gettext('Send email when source comes back even if number of failure was low.')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgemailalwaysnotify');
        }
    }
});

