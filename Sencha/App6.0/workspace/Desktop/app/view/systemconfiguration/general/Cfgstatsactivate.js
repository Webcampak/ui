/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfgstatsactivate");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfgstatsactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.systemconfigurationgeneralcfgstatsactivate"

    , fieldLabel: i18n.gettext("Enable Statistics Collection")
    , labelWidth: 200
    , uncheckedValue: "no"
    , inputValue: "yes"

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue", newValue, oldValue, "cfgstatsactivate")
        }
    }
});

