//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailreplyto');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailreplyto', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationadvancedemailscfgemailreplyto'

    , fieldLabel: i18n.gettext('Send email from (Reply-To)')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfgemailreplyto')
        }
    }
});
