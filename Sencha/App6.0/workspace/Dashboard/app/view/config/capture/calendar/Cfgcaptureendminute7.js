/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcaptureendminute7");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcaptureendminute7", {
    extend: "Ext.form.field.Number"
    , alias: "widget.configcapturecalendarcfgcaptureendminute7"

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function() {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 7);
        }
    }
});

