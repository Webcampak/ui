/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable4");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable4", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcapturedayenable4"

    , fieldLabel: i18n.gettext("Thursday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 4); // 4 for Thursday
        }
    }
});

