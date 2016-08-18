//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.lastpictures.thumb.Main');
//</debug>
Ext.define('WPAKT.view.dashboard.lastpictures.thumb.Main', {
    extend: 'Ext.container.Container'
    , alias: 'widget.dashboardlastpicturesthumbmain'

    , width: 200
    , layout: {type: 'vbox', align: 'stretch'}
    , defaults: {frame: true}
    
//    , items: [
//        {xtype: 'dashboardlastpicturesthumbtext'}
//        , {xtype: 'dashboardlastpicturesthumbpicture'}
//    ]
});

