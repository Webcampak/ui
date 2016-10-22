/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.reportadd.destination.FTPServersList");
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.destination.FTPServersList", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.syncreportsreportadddestinationftpserverslist"

    , store: "syncreports.DestinationFTPServers"

    , fieldLabel: i18n.gettext("FTP Server")
    , valueField: "ID"
    , displayField: "NAME"
    , queryMode: "local"
    , hidden: true
});