/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.edit.StartHour");
//</debug>
Ext.define("WPAKD.view.alerts.controls.edit.StartHour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.alertscontrolseditstarthour"

    , hideLabel: true

    , allowBlank: false
    , minValue: 0
    , maxValue: 23
});

