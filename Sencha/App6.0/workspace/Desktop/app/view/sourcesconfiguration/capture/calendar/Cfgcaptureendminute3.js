/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendminute3");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendminute3", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcaptureendminute3"

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 3);
        }
    }
});

