/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgminimumcapturevalue");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgminimumcapturevalue", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturesourcecfgminimumcapturevalue"

    , fieldLabel: i18n.gettext("Minimum Interval")
    , minValue: 0
    , allowBlank: false

    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgminimumcapturevalue");
        }
    }
});

