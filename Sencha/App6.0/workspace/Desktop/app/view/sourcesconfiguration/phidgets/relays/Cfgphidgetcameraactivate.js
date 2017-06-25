/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcameraactivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.relays.Cfgphidgetcameraactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationphidgetsrelayscfgphidgetcameraactivate"

    , fieldLabel: i18n.gettext("Activate")
    , uncheckedValue: "off"
    , inputValue: "on"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue", newValue, oldValue, "cfgphidgetcameraactivate");
        }
    }
});

