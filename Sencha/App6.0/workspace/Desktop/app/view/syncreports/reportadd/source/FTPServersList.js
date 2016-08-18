//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.syncreports.reportadd.source.FTPServersList');
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.source.FTPServersList", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.syncreportsreportaddsourceftpserverslist'

    , store: 'syncreports.SourceFTPServers'

    , fieldLabel: i18n.gettext('FTP Server')
    , valueField: 'ID'
    , displayField: 'NAME'
    , queryMode: 'local'
    , hidden: true    
});