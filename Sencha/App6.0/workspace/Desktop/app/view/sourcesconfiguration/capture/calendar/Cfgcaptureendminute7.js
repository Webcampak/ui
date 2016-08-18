//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendminute7');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcaptureendminute7', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcapturecalendarcfgcaptureendminute7'

    , allowBlank: false
    , minValue: 0
    , maxValue: 59
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule', 7);
        }
    }
});

