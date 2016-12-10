/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.scheduledelay.Cfgemailalertscheduledelay");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.scheduledelay.Cfgemailalertscheduledelay", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationadvancedscheduledelaycfgemailalertscheduledelay"

    , fieldLabel: i18n.gettext("Enable Time based alerts")
    , boxLabel: i18n.gettext("Email alerts will be sent based on time since last planned capture")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalertscheduledelay");
        }
    }
});

