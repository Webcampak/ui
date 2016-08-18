//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturedayenable4');
//</debug>
Ext.define('WPAKT.view.config.capture.calendar.Cfgcapturedayenable4', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.configcapturecalendarcfgcapturedayenable4'

    , fieldLabel: i18n.gettext('Thursday')

    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKT.controller.config.Config.updateCalendarSchedule', 4); // 4 for Thursday
        }
    }
});

