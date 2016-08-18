//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.videos.selection.Main');
//</debug>
Ext.define('WPAKD.view.videos.selection.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.videosselectionmain'

    , layout: {type: 'vbox', align: 'stretch'}
    , defaults: {frame: true}
    , items: [{
        xtype: 'container'
        , layout: {type: 'vbox', pack: 'start', align: 'center'}
        , height: 210 //flex: 1,
        , items: [{
            xtype: 'videosselectiondayslist'
        }]
    }]
});

