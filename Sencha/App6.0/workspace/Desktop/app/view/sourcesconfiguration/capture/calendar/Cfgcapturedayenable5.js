//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable5');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable5', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationcapturecalendarcfgcapturedayenable5'

    , fieldLabel: i18n.gettext('Friday')

    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule', 5); // 5 for Friday
        }
    }
});

