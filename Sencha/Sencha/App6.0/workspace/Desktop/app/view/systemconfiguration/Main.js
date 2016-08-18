//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.systemconfiguration.Main');
//</debug>
Ext.define('WPAKD.view.systemconfiguration.Main', {
    extend: 'Ext.window.Window'
    , alias: 'widget.systemconfigurationmain'

    , title: i18n.gettext('System Configuration')

    , width: 500
    , height: 600

    , stateful: true
    , stateId: 'systemconfigurationmain'

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : 'hide'
    , glyph:0xf013
    , layout: {
        type:'hbox'
        , pack: 'start'
        , align: 'stretch'
    }
    , items: [{
        xtype: 'systemconfigurationsystemconfiguration'
        , flex: 1
    }]
});

