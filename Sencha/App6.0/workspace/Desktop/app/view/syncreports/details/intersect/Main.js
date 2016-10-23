/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.intersect.Main");
//</debug>
Ext.define("WPAKD.view.syncreports.details.intersect.Main", {
    extend: "Ext.container.Container"
    , alias: "widget.syncreportsdetailsintersectmain"
    
    , items: [
        {xtype: "syncreportsdetailsintersectpiechart"}
    ]  
});