/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturestartminute3");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcapturestartminute3", {
    extend: "Ext.form.field.Number"
    , alias: "widget.configcapturecalendarcfgcapturestartminute3"

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 3);
        }
    }
});

