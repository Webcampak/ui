//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable2');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.calendar.Cfgcapturedayenable2', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationcapturecalendarcfgcapturedayenable2'

    , fieldLabel: i18n.gettext('Tuesday')

    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule', 2); // 2 for Tuesday
        }
    }
});

