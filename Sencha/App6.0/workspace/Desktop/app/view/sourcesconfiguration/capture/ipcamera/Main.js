/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.ipcamera.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.ipcamera.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcaptureipcameramain"

    , title: i18n.gettext("Configuration of \"<u>IP Camera (FTP) / Webcampak</u>\"")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 300}
    , items: [
        {xtype: "sourcesconfigurationcaptureipcameracfgsourcecamiptemplate"}
        , {xtype: "sourcesconfigurationcaptureipcameracfgsourcecamiplimiterotation"}
        , {xtype: "sourcesconfigurationcaptureipcameracfgsourcecamiphotlinkerror"}
    ]
});

