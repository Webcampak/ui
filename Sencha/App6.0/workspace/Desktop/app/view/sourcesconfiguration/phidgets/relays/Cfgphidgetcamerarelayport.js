/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerarelayport");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerarelayport", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationphidgetsrelayscfgphidgetcamerarelayport"

    , fieldLabel: i18n.gettext("Relay port")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue", newValue, oldValue, "cfgphidgetcamerarelayport");
        }
    }
});
