//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.disk.Main');
//</debug>
Ext.define('WPAKT.view.dashboard.disk.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.dashboarddiskmain'

    , cls: 'quick-graph-panel shadow-panel'
    , headerPosition: 'top'    
    , height: 150
    , bodyPadding: 15
    , title: i18n.gettext('Disk')
    , iconCls: 'x-fa fa-hdd-o'
    

    , layout: {type: 'vbox', align: 'stretch'}
    , items: [
        {xtype: 'dashboarddiskuseddisktxt'}
        , {xtype: 'dashboarddiskuseddiskbar'}        
        , {xtype: 'dashboarddiskfreedisktxt'}
        , {xtype: 'dashboarddiskfreediskbar'}
    ]   
});

