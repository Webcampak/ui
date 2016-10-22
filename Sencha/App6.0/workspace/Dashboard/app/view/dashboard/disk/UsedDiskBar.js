/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.disk.UsedDiskBar");
//</debug>
Ext.define("WPAKT.view.dashboard.disk.UsedDiskBar", {
    extend: "Ext.ProgressBar"
    , alias: "widget.dashboarddiskuseddiskbar"

    , cls: "bottom-indent service-research"
    , height: 4
    , minHeight: 4
    , value: 0
});
