/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfgphidgetactivate");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfgphidgetactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.systemconfigurationgeneralcfgphidgetactivate"

    , fieldLabel: i18n.gettext("Enable Phidget board")
    , labelWidth: 200
    , uncheckedValue: "no"
    , inputValue: "yes"

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue", newValue, oldValue, "cfgphidgetactivate");
        }
    }
});

