/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturestarthour2");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcapturestarthour2", {
    extend: "Ext.form.field.Number"
    , alias: "widget.configcapturecalendarcfgcapturestarthour2"

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
    , checkChangeEvents: 500
    , listeners : {
        change : function() {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 2);
        }
    }
});

