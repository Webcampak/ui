//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.ftp.Cfglocalftpusername');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.ftp.Cfglocalftpusername', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationadvancedftpcfglocalftpusername'

    , fieldLabel: i18n.gettext('Username')
    , readOnlyCls: 'x-item-disabled'
    , readOnly: true
});
