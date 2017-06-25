/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerafailure");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcamerafailure", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationphidgetsrelayscfgphidgetcamerafailure"

    , fieldLabel: i18n.gettext("Failures before cycle")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue", newValue, oldValue, "cfgphidgetcamerafailure");
        }
    }
});
