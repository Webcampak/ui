/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.source.FTPServersList");
//</debug>
Ext.define("WPAKD.view.syncreports.details.source.FTPServersList", {
    extend: "Ext.form.field.Display"
    , alias : "widget.syncreportsdetailssourceftpserverslist"

    , fieldLabel: i18n.gettext("FTP Server")
});