/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturestartminute4");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcapturestartminute4", {
    extend: "Ext.form.field.Number"
    , alias: "widget.configcapturecalendarcfgcapturestartminute4"

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function() {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 4);
        }
    }
});

