/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.cameras.CamerasTxt");
//</debug>
Ext.define("WPAKT.view.dashboard.cameras.CamerasTxt", {
    extend: "Ext.Component"
    , alias: "widget.dashboardcamerascamerastxt"

    , data: []
    , tpl: "<tpl for=\".\"><div class=\"left-aligned-div\">{NAME}</div><div class=\"right-aligned-div\">{ID}</div><br /></tpl>"
});
