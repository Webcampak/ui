/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable7");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable7", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcapturedayenable7"

    , fieldLabel: i18n.gettext("Sunday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 7); // 7 for Sunday
        }
    }
});

