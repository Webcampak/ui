/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable1");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable1", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcapturedayenable1"

    , fieldLabel: i18n.gettext("Monday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 1); // 1 for Monday
        }
    }
});

