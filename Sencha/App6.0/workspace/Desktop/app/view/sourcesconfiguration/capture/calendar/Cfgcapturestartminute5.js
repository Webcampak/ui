/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturestartminute5");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturestartminute5", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcapturestartminute5"

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function() {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 5);
        }
    }
});

