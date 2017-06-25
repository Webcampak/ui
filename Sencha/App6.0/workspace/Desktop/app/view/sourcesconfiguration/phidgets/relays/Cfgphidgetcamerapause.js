/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerapause");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerapause", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationphidgetsrelayscfgphidgetcamerapause"

    , fieldLabel: i18n.gettext("Pause between states")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue", newValue, oldValue, "cfgphidgetcamerapause");
        }
    }
});
