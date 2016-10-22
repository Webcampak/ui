/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.ButtonRefresh");
//</debug>
Ext.define("WPAKD.view.logs.ButtonRefresh", {
    extend: "Ext.panel.Tool"
    , alias : "widget.logsbuttonrefresh"

    , type:"refresh"
    , tooltip: "Refresh"
});
