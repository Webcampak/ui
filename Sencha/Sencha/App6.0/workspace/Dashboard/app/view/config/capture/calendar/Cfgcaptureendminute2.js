//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.calendar.Cfgcaptureendminute2');
//</debug>
Ext.define('WPAKT.view.config.capture.calendar.Cfgcaptureendminute2', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.configcapturecalendarcfgcaptureendminute2'

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKT.controller.config.Config.updateCalendarSchedule', 2);
        }
    }
});

