/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.Main");
//</debug>
Ext.define("WPAKT.view.dashboard.Main", {
    extend: "Ext.container.Container"
    , alias: "widget.dashboardmain"

    , requires: [
        "Ext.ux.layout.ResponsiveColumn"
    ]
    , id: "dashboard"
    , layout: {
         type: "responsivecolumn",
         states: {
             small: 1300,
             medium: 1400,
             large: 0
         }
    }  
        
    , items: [{
        xtype: "dashboardsourcesstatusmain"
        , responsiveCls: "big-40 small-100"
    }, {
        xtype: "dashboardcamerasmain"
        , responsiveCls: "big-20 small-50"
    }, {
        xtype: "dashboarddiskmain"
        , responsiveCls: "big-20 small-50"
    }, {
        xtype: "dashboarduptimemain"
        , responsiveCls: "big-40 small-50"
    }]
});