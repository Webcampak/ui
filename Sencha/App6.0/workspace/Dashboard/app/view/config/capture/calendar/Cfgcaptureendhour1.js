/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcaptureendhour1");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcaptureendhour1", {
    extend: "Ext.form.field.Number"
    , alias: "widget.configcapturecalendarcfgcaptureendhour1"

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 1);
        }
    }
});

