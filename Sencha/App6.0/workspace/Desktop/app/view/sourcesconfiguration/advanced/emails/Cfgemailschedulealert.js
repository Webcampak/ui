/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailschedulealert");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailschedulealert", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationadvancedemailscfgemailschedulealert"

    , fieldLabel: i18n.gettext("Schedule-based email alerts")
    , boxLabel: i18n.gettext("Email alerts are sent based on a pre-configured alert schedule")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailschedulealert");
        }
    }
});

