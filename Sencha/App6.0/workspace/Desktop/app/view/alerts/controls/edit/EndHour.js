/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.edit.EndHour");
//</debug>
Ext.define("WPAKD.view.alerts.controls.edit.EndHour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.alertscontrolseditendhour"

    , hideLabel: true
    , allowBlank: false
    , minValue: 0
    , maxValue: 23
});

