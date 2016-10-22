/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.uptime.Hours");
//</debug>
Ext.define("WPAKT.view.dashboard.uptime.Hours", {
    extend: "Ext.container.Container"
    , alias: "widget.dashboarduptimehours"
    , cls: "uptime-digit-number"
    , html: ""
});
