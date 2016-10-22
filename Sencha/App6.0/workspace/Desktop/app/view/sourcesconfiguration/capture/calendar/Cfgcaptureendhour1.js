/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendhour1");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendhour1", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcaptureendhour1"

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 1);
        }
    }
});

