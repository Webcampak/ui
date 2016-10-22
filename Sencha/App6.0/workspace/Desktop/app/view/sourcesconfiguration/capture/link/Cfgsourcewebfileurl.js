/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.link.Cfgsourcewebfileurl");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.link.Cfgsourcewebfileurl", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationcapturelinkcfgsourcewebfileurl"

    , fieldLabel: i18n.gettext("URL File/Stream")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcewebfileurl");
        }
    }
});
