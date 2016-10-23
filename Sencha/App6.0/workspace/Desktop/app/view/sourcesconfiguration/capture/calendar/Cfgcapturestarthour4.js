/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturestarthour4");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturestarthour4", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcapturecalendarcfgcapturestarthour4"

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
    , checkChangeEvents: 500
    , listeners : {
        change : function() {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule", 4);
        }
    }
});

