/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcaptureendminute5");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcaptureendminute5", {
    extend: "Ext.form.field.Number"
    , alias: "widget.configcapturecalendarcfgcaptureendminute5"

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function() {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 5);
        }
    }
});

