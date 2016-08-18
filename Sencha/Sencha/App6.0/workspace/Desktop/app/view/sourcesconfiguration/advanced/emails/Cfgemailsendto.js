//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailsendto');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailsendto', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationadvancedemailscfgemailsendto'

    , fieldLabel: i18n.gettext('Send email to')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgemailsendto')
        }
    }
});
