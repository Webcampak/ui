/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable6");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable6", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcapturedayenable6"

    , fieldLabel: i18n.gettext("Saturday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 6); // 6 for Saturday
        }
    }
});

