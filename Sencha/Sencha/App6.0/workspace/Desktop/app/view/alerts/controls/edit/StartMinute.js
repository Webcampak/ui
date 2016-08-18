//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.alerts.controls.edit.StartMinute');
//</debug>
Ext.define('WPAKD.view.alerts.controls.edit.StartMinute', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.alertscontrolseditstartminute'

    , hideLabel: true
    , allowBlank: false
    , minValue: 0
    , maxValue: 59
});

