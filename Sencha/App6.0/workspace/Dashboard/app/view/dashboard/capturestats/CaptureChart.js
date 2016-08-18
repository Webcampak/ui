//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.capturestats.CaptureChart');
//</debug>
Ext.define('WPAKT.view.dashboard.capturestats.CaptureChart', {
    extend: 'Ext.chart.CartesianChart'
    , alias: 'widget.dashboardcapturestatscapturechart'

    , animation : !Ext.isIE9m && Ext.os.is.Desktop
    //, insetPadding:0
    , store: 'dashboard.CaptureStats'
    , axes: [{
        type: 'category'
        , fields: [
            'xvalue'
        ]
//        , hidden: true
        , position: 'bottom'
        , grid: true
        , label: {font: '10px Arial'}
        
    }, {
        type: 'numeric'
        , fields: [
            'y1value'
            , 'y2value'
        ]
        , grid: {
            odd: {
                fill: '#e8e8e8'
            }
        }
        , hidden: true
        , position: 'left'        
    }],
    series: [{
            type: 'line'
            , colors: [
                'rgba(103, 144, 199, 0.6)'
            ]
            , useDarkerStrokeColor: false
            , xField: 'xvalue'
            , yField: [
                'y1value'
            ]
            , fill: true
            , smooth: true
            , tooltip: {
                trackMouse: true,
                renderer: function (tooltip, record, item) {
                    tooltip.setHtml(record.get('y1value') + ' ' + i18n.gettext('on') + ' ' + record.get('xvalue'));
                }
            }            
    }, {
            type: 'line'
            , colors: [
                'rgba(238, 146, 156, 0.6)'
            ]
            , useDarkerStrokeColor: false
            , xField: 'xvalue'
            , yField: [
                'y2value'
            ]
            , fill: true
            , smooth: true
    }]
    , interactions: [{
        type: 'panzoom'
    }]
});

