/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.disk.FreeDiskTxt");
//</debug>
Ext.define("WPAKT.view.dashboard.disk.FreeDiskTxt", {
    extend: "Ext.Component"
    , alias: "widget.dashboarddiskfreedisktxt"

    , data: {
        value: "n/a"
        , percent: "n/a"
    }
    , tpl: "<div class=\"left-aligned-div\">Free</div><div class=\"right-aligned-div\">{value} ({percent})</div>"
});
