/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.time.Cfgemailalerttime");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.time.Cfgemailalerttime", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationadvancedtimecfgemailalerttime"

    , fieldLabel: i18n.gettext("Enable Time based alerts")
    , boxLabel: i18n.gettext("Email alerts will be sent based on time since last capture")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalerttime");
        }
    }
});

