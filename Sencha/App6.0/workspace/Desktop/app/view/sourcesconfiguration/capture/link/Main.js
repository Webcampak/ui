/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.link.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.link.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcapturelinkmain"

    , title: i18n.gettext("Configuration of \"<u>Internet Picture</u>\" or \"<u>Video Streaming</u>\"")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: "sourcesconfigurationcapturelinkcfgsourcewebfileurl"}
    ]
});

