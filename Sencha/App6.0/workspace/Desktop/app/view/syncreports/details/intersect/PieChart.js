/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.intersect.PieChart");
//</debug>
Ext.define("WPAKD.view.syncreports.details.intersect.PieChart", {
    extend: "Ext.chart.PolarChart"
    , alias: "widget.syncreportsdetailsintersectpiechart"

    , reference: "chart"
    , store: "syncreports.IntersectChart"
    , legend: {
        docked: "bottom"
        , toggleable: false
    },
    interactions: ["rotate"]
    , series: [{
        type: "pie"
        , angleField: "VALUE"
        , label: {
            field: "NAME"
            , calloutLine: false
        }
        , highlight: true           
    }]  
});