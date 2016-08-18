//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturestarthour2');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturestarthour2', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcapturecalendarcfgcapturestarthour2'

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule', 2);
        }
    }
});

