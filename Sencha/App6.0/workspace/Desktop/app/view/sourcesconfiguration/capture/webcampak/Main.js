/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.webcampak.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.webcampak.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcapturewebcampakmain"

    , title: i18n.gettext("Configuration of \"<u>Webcampak Source</u>\"")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: "sourcesconfigurationcapturewebcampakcfgsourcewpaktype"}
        , {xtype: "sourcesconfigurationcapturewebcampakcfgsourcewpakgetsourceid"}
        //, {xtype: "sourcesconfigurationcapturewebcampakcfgsourcewpakprocessraw"}
    ]
});

