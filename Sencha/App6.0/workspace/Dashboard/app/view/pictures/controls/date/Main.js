//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.controls.date.Main');
//</debug>
Ext.define('WPAKT.view.pictures.controls.date.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.picturescontrolsdatemain'

    , cls: 'quick-graph-panel shadow-panel'
    //, layout: 'fit'
    , headerPosition: 'top'
    , iconCls: 'x-fa fa-calendar'
    , title: i18n.gettext('Date & Time')
    , layout: {type: 'vbox',align: 'stretch'}    
    , items: [
        {xtype: 'picturescontrolsdatedatepicker'}
        , {xtype: 'picturescontrolsdatepicturecombo'}
    ]   
});
