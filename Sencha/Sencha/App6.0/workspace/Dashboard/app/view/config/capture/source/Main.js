//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.source.Main');
//</debug>
Ext.define('WPAKT.view.config.capture.source.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.configcapturesourcemain'

    , cls: 'quick-graph-panel shadow-panel'
    //, layout: 'fit'
    , headerPosition: 'top'
    , iconCls: 'x-fa fa fa-cogs'
    , title: i18n.gettext('Capture')
    
//    , layout: 'fit'
    , items: [{
        xtype: 'configcapturesourcecfgsourceactive'
        , padding: '0 10 10 10'
        , labelWidth: 105
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , flex: 1
        , items: [{
            xtype: 'configcapturesourcecfgcroncapturevalue'
            , labelWidth: 105
            , width: 180
        }, {
            xtype: 'configcapturesourcecfgcroncaptureinterval'
            , flex: 1
        }]     
    }]
});

