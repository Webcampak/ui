/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.system.Bandwidth");
//</debug>
Ext.define("WPAKD.view.stats.system.Bandwidth", {
    extend: "Ext.chart.CartesianChart"
    , alias : "widget.statssystembandwidth"


    , store: "stats.System"

    , legend: {
        position: "bottom"
    }
    , animate: true
    , shadow: true

    , axes: [{
        title: i18n.gettext("Bandwidth (/s)")
        , type: "numeric"
        , position: "left"
        , fields: ["BandwidthIn", "BandwidthOut"]
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
        , renderer: function (axis, label) {
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
        , yField: ["BandwidthIn", "BandwidthOut"]
        , style: {
            opacity: 0.93
        }
    }]

});
