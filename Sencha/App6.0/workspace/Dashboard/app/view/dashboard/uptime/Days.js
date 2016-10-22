/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.uptime.Days");
//</debug>
Ext.define("WPAKT.view.dashboard.uptime.Days", {
    extend: "Ext.container.Container"
    , alias: "widget.dashboarduptimedays"
    , cls: "uptime-digit-number"
    , html: ""
});
