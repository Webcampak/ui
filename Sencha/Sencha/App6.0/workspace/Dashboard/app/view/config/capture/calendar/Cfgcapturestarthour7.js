//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturestarthour7');
//</debug>
Ext.define('WPAKT.view.config.capture.calendar.Cfgcapturestarthour7', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.configcapturecalendarcfgcapturestarthour7'

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
    , checkChangeEvents: 500
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKT.controller.config.Config.updateCalendarSchedule', 7);
        }
    }
});

