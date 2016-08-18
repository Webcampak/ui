//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.controls.Main');
//</debug>
Ext.define('WPAKT.view.pictures.controls.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.picturescontrolsmain'

    , cls: 'quick-graph-panel shadow-panel',
//    height: 130,
    layout: 'fit',
    headerPosition: 'top',
    iconCls: 'x-fa fa-gamepad',
    layout: {type: 'hbox',align: 'stretch'},

    title: i18n.gettext('Email'),
    items: [{
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'left'
            , iconCls: 'x-fa fa-minus'
            , text: i18n.gettext('500')            
        }, {
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'left'
            , iconCls: 'x-fa fa-minus'
            , text: i18n.gettext('200')            
        }, {
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'left'
            , iconCls: 'x-fa fa-minus'
            , text: i18n.gettext('50')            
        }, {
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'left'
            , iconCls: 'x-fa fa-minus'
            , text: i18n.gettext('15')            
        }, {
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'right'
            , iconCls: 'x-fa fa-plus'
            , text: i18n.gettext('15')            
        }, {
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'right'
            , iconCls: 'x-fa fa-plus'
            , text: i18n.gettext('50')            
        }, {
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'right'
            , iconCls: 'x-fa fa-plus'
            , text: i18n.gettext('200')            
        }, {
            xtype: 'button'
            , scale: 'medium'
            , iconAlign: 'right'
            , iconCls: 'x-fa fa-plus'
            , text: i18n.gettext('500')            
        }
    ]   
});
