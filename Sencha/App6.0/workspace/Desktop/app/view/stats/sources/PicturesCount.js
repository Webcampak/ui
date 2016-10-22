/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.sources.PicturesCount");
//</debug>
Ext.define("WPAKD.view.stats.sources.PicturesCount", {
    extend: "Ext.chart.CartesianChart"
    , alias : "widget.statssourcespicturescount"


    , store: "stats.SourcesPicturesCountSize"
    , legend: false
    , animate: true
    , shadow: true

    , axes: [{
        title: i18n.gettext("Pictures")
        , type: "numeric"
        , position: "left"
        , fields: ["COUNT"]
        , minimum: 0
        , grid: {
            odd: {
                opacity: 1
                , fill: "#ddd"
                , stroke: "#bbb"
                , "stroke-width": 0.5
            }
        },
        label: {font: "10px Arial"}
    }, {
        type: "time"
        , title: i18n.gettext("Number of Pictures per day")
        , position: "bottom"
        , fields: ["DATE"]
        , dateFormat: "d M"
        , label: {font: "10px Arial"}
        , grid: true
    }],
    series: [{
        type: "line"
        , xField: "DATE"
        , yField: "COUNT"
        , showInLegend: false
        //, marker: true
        , tooltip: {
            trackMouse: true,
            renderer: function (tooltip, record, item) {
                tooltip.setHtml(record.get("COUNT") + " " + i18n.gettext("on") + " " + Ext.util.Format.dateRenderer("M d, Y")(record.get("DATE")));
            }
        }
    }]
});
