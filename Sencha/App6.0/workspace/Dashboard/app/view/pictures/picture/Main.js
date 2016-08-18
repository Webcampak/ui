//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.picture.Main');
//</debug>
Ext.define('WPAKT.view.pictures.picture.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.picturespicturemain'

    , cls: 'dashboard-main-chart shadow-panel'

    , bodyPadding: 15

    , title: ''
    , layout: {type: 'vbox',align: 'stretch'} 
    , items: [
        {xtype: 'picturespicturepicture', flex: 1}
        , {xtype: 'container', height: 5}
        , {xtype: 'picturescontrolsquicknavmain'}
    ]
});
