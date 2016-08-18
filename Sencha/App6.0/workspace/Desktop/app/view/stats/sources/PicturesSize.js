//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.stats.sources.PicturesSize');
//</debug>
Ext.define('WPAKD.view.stats.sources.PicturesSize', {
    extend: 'Ext.chart.CartesianChart'
    , alias : 'widget.statssourcespicturessize'


    , store: 'stats.SourcesPicturesCountSize'
    , legend: false
    , animate: true
    , shadow: true

    , axes: [{
        title: i18n.gettext('Size')
        , type: 'numeric'
        , position: 'left'
        , fields: ['SIZE']
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
        , renderer: function (axis, label, layoutContext, lastlabel) {
            if (parseInt(label) <= 1) {return Math.round(label);} 
            else {return Ext.util.Format.fileSize(label);}
        }        
    }, {
        type: 'time'
        , title: i18n.gettext('Total size (MB) per day')
        , position: 'bottom'
        , fields: ['DATE']
        , dateFormat: 'd M'
        , label: {font: '10px Arial'}
        , grid: true
    }],
    series: [{
        type: 'line'
        , xField: 'DATE'
        , yField: 'SIZE'
        , showInLegend: false
        //, marker: true
        , tooltip: {
            trackMouse: true,
            renderer: function (tooltip, record, item) {
                tooltip.setHtml(Ext.util.Format.fileSize(record.get('SIZE')) + ' ' + i18n.gettext('on') + ' ' + Ext.util.Format.dateRenderer('M d, Y')(record.get('DATE')));
            }
        }
    }]
});
