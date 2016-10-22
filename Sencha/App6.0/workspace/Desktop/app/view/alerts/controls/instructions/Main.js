/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.instructions.Main");
//</debug>
Ext.define("WPAKD.view.alerts.controls.instructions.Main", {
    extend: "Ext.container.Container"
    , alias: "widget.alertscontrolsinstructionsmain"

    , html: 
     i18n.gettext("This configuration screen will let you specify the expected capture slots for your source.") + "<br />"
     + i18n.gettext("Alerts will be triggered based on any deviation from this schedule.") + "<br /> <br />"
     + i18n.gettext("<b>Frequency</b> is calculated from the beginning of the day (00:00), not from start time.")
    
});



