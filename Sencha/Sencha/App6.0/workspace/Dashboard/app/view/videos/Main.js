//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.videos.Main');
//</debug>
Ext.define('WPAKT.view.videos.Main', {
    extend: 'Ext.container.Container'
    , alias: 'widget.videosmain'

    , requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ]

    , id: 'dashboard'

    , layout: 'responsivecolumn',
    
    listeners: {
        hide: 'onHideView'
    },

    items: [{
        xtype: 'videosvideomain'
        , responsiveCls: 'big-70 small-100'         
    }, {
        xtype: 'videoscontrolsdatemain'
        , responsiveCls: 'big-30 small-50'      
    }]
});