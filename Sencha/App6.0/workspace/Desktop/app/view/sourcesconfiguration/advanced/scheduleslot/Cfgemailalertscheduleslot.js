/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Cfgemailalertscheduleslot");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Cfgemailalertscheduleslot", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationadvancedscheduleslotcfgemailalertscheduleslot"

    , fieldLabel: i18n.gettext("Enable Schedule Based Alerts")
    , boxLabel: i18n.gettext("Email alerts will be sent based on the number of missing captures")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalertscheduleslot");
        }
    }
});

