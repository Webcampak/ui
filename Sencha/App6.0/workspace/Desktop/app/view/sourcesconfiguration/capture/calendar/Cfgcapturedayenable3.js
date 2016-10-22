/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable3");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable3", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcapturedayenable3"

    , fieldLabel: i18n.gettext("Wednesday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 3); // 3 for Wednesday
        }
    }
});

