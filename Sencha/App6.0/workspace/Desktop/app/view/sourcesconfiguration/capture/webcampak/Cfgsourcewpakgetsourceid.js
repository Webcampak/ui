/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.webcampak.Cfgsourcewpakgetsourceid");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.webcampak.Cfgsourcewpakgetsourceid", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationcapturewebcampakcfgsourcewpakgetsourceid"

    , fieldLabel: i18n.gettext("Select source to get from")
    , store: "shared.Sources"

    , valueField: "SOURCEID"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcewpakgetsourceid");
        }
    }
});
