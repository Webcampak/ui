//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.calendar.Cfgcroncalendar');
//</debug>
Ext.define('WPAKT.view.config.capture.calendar.Cfgcroncalendar', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.configcapturecalendarcfgcroncalendar'

    , fieldLabel: i18n.gettext('Enable')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKT.controller.config.Config.updateStoreValue', newValue, oldValue, 'cfgcroncalendar');
        }
    }
});

