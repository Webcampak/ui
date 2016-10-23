/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.destination.FTPServersList");
//</debug>
Ext.define("WPAKD.view.syncreports.details.destination.FTPServersList", {
    extend: "Ext.form.field.Display"
    , alias : "widget.syncreportsdetailsdestinationftpserverslist"

    , fieldLabel: i18n.gettext("FTP Server")
});