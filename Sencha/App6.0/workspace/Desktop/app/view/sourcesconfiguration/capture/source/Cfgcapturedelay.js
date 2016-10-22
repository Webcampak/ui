/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturedelay");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturedelay", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturesourcecfgcapturedelay"

    , fieldLabel: i18n.gettext("Capture delay")
    , minValue: 0
    , allowBlank: false

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgcapturedelay");
        }
    }
});

