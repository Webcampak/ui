/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendhour6");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendhour6", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcaptureendhour6"

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 6);
        }
    }
});

