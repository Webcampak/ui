//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.ftp.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.ftp.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationadvancedftpmain'

    , title: i18n.gettext('Local FTP account')

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: 'sourcesconfigurationadvancedftpcfglocalftpusername'}
        , {xtype: 'sourcesconfigurationadvancedftpcfglocalftppass'}
    ]
});

