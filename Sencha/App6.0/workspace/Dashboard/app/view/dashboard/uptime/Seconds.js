/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.uptime.Seconds");
//</debug>
Ext.define("WPAKT.view.dashboard.uptime.Seconds", {
    extend: "Ext.container.Container"
    , alias: "widget.dashboarduptimeseconds"
    , cls: "uptime-digit-number-sec"
    , html: ""
});
