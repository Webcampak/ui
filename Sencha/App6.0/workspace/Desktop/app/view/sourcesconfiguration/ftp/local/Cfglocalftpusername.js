/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.ftp.local.Cfglocalftpusername");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.ftp.local.Cfglocalftpusername", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationftplocalcfglocalftpusername"

    , fieldLabel: i18n.gettext("Username")
    , padding: 5
    , readOnlyCls: "x-item-disabled"
    , readOnly: true
});
