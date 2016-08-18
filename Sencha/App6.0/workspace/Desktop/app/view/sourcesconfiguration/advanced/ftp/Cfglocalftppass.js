//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.ftp.Cfglocalftppass');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.ftp.Cfglocalftppass', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationadvancedftpcfglocalftppass'

    , fieldLabel: i18n.gettext('Password')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue', newValue, oldValue, 'cfglocalftppass')
        }
    }
});
