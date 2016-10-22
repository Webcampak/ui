/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.ftp.local.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.ftp.local.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationftplocalmain"

    , title: i18n.gettext("Local FTP Account")

    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: "sourcesconfigurationftplocalcfglocalftpusername"}
        , {xtype: "sourcesconfigurationftplocalcfglocalftppass"}
    ]
});

