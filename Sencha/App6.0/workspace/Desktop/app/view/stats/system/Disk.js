/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.system.Disk");
//</debug>
Ext.define("WPAKD.view.stats.system.Disk", {
    extend: "Ext.chart.CartesianChart"
    , alias : "widget.statssystemdisk"


    , store: "stats.System"

    , legend: {
        position: "bottom"
    }
    , animate: true
    , shadow: true

    , axes: [{
        title: i18n.gettext("Hard Disk")
        , type: "numeric"
        , position: "left"
        , fields: ["DiskUsageUsed", "DiskUsageFree"]
        , minimum: 0
        , grid: {
            odd: {
                opacity: 1
                , fill: "#ddd"
                , stroke: "#bbb"
                , "stroke-width": 0.5
            }
        }
        , label: {font: "10px Arial"}
        , renderer: function (axis, label, layoutContext, lastlabel) {
            if (parseInt(label) <= 1) {return Math.round(label);}
            else {return Ext.util.Format.fileSize(label);}
        }
    }, {
        type: "time"
        , position: "bottom"
        , fields: ["date"]
        , dateFormat: "d M H:i"
        , label: {font: "10px Arial"}
        , grid: true
    }],
    series: [{
        type: "area"
        , highlight: false
        , axis: "left"
        , xField: "date"
        , yField: ["DiskUsageUsed", "DiskUsageFree"]
        , style: {
            opacity: 0.93
        }
    }]

});
