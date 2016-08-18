//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailalertfailure');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailalertfailure', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationadvancedemailscfgemailalertfailure'

    , fieldLabel: i18n.gettext('Send an email if capture is more than ')
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgemailalertfailure')
        }
    }
});
