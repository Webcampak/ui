//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.stats.system.Memory');
//</debug>
Ext.define('WPAKD.view.stats.system.Memory', {
    extend: 'Ext.chart.CartesianChart'
    , alias : 'widget.statssystemmemory'


    , store: 'stats.System'
    , legend: false
    , animate: true
    , shadow: true

    , axes: [{
        title: i18n.gettext('Memory (%)')
        , type: 'numeric'
        , position: 'left'
        , fields: ['MemoryUsagePercent']
        , minimum: 0
        , grid: {
            odd: {
                opacity: 1
                , fill: '#ddd'
                , stroke: '#bbb'
                , 'stroke-width': 0.5
            }
        }
        , label: {font: '10px Arial'}
    }, {
        type: 'time'
        , position: 'bottom'
        , fields: ['date']
        , dateFormat: 'd M H:i'
        , label: {font: '10px Arial'}
        , grid: true
    }],
    series: [{
        type: 'area'
        , highlight: false
        , axis: 'left'
        , xField: 'date'
        , yField: ['MemoryUsagePercent']
        , style: {
            opacity: 0.93
        }
    }]

});
