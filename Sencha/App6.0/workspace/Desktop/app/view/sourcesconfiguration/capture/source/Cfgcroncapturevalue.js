/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgcroncapturevalue");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgcroncapturevalue", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturesourcecfgcroncapturevalue"

    , fieldLabel: i18n.gettext("Capture every")
    , minValue: 0
    , allowBlank: false

    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgcroncapturevalue");
        }
    }
});

