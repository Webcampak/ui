/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.edit.EndMinute");
//</debug>
Ext.define("WPAKD.view.alerts.controls.edit.EndMinute", {
    extend: "Ext.form.field.Number"
    , alias: "widget.alertscontrolseditendminute"

    , hideLabel: true
    , allowBlank: false
    , minValue: 0
    , maxValue: 59
});

