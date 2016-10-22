/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.uptime.Minutes");
//</debug>
Ext.define("WPAKT.view.dashboard.uptime.Minutes", {
    extend: "Ext.container.Container"
    , alias: "widget.dashboarduptimeminutes"
    , cls: "uptime-digit-number"
    , html: ""
});
