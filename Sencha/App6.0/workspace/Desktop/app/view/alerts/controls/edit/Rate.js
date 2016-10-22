/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.edit.Rate");
//</debug>
Ext.define("WPAKD.view.alerts.controls.edit.Rate", {
    extend: "Ext.form.field.Number"
    , alias: "widget.alertscontrolseditrate"

    , hideLabel: true
    , allowBlank: false
    , minValue: 0
    , maxValue: 60
});

