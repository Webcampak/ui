/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerasensorport");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerasensorport", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationphidgetsrelayscfgphidgetcamerasensorport"

    , fieldLabel: i18n.gettext("Sensor port")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue", newValue, oldValue, "cfgphidgetcamerasensorport");
        }
    }
});
