//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.pictures.Main');
//</debug>
Ext.define('WPAKD.view.pictures.Main', {
    extend: 'Ext.window.Window'
    , alias: 'widget.picturesmain'

    , title: i18n.gettext('Webcampak Pictures')

    , width: 1000
    , height: 700

    , stateful: true
    , stateId: 'picturesmain'

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : 'hide'
    , glyph:0xf030
    , layout: {
        type:'hbox'
        , pack: 'start'
        , align: 'stretch'
    }
    , dockedItems: [{
        xtype: 'toolbar'
        , dock: 'top'
        , items: [{
            xtype: 'picturessourceslist'
            , width: 335
        }, '->', {
            xtype: 'picturessourcename'
            , flex: 1
        }, '->']
    }]
    , layout: {type: 'hbox', pack: 'start', align: 'stretch'}
    , defaults: {frame: true}
    , items: [{
        xtype: 'picturesselectionmain'
        , width: 340
    }, {
        xtype: 'picturesdisplaymain'
        , flex: 1
    }]
});

