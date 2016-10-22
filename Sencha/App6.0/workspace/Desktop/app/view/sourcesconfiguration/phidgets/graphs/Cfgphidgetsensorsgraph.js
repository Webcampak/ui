/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.graphs.Cfgphidgetsensorsgraph");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.graphs.Cfgphidgetsensorsgraph", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationphidgetsgraphscfgphidgetsensorsgraph"

    , fieldLabel: i18n.gettext("Generate Phidget sensor graph")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue", newValue, oldValue, "cfgphidgetsensorsgraph");
        }
    }
});

