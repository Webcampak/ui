//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturedayenable2');
//</debug>
Ext.define('WPAKT.view.config.capture.calendar.Cfgcapturedayenable2', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.configcapturecalendarcfgcapturedayenable2'

    , fieldLabel: i18n.gettext('Tuesday')

    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKT.controller.config.Config.updateCalendarSchedule', 2); // 2 for Tuesday
        }
    }
});

