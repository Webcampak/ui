//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.uptime.Main');
//</debug>
Ext.define('WPAKT.view.dashboard.uptime.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.dashboarduptimemain'

    , cls: 'quick-graph-panel shadow-panel'
    , height: 150
//    , width: 260
    , headerPosition: 'top'
    , iconCls: 'x-fa fa-power-off'

    , title: i18n.gettext('Uptime')

    , layout: {type: 'vbox', align: 'center', pack: 'center'}    
    , items: [
        {
            xtype: 'container'
            , layout: {type: 'hbox', align: 'center', pack: 'center'}   
            , height: 50
            , items: [
                {xtype: 'dashboarduptimeyears', width: 45, height: 40}
                , {xtype: 'dashboarduptimedays', width: 45, height: 40}
                , {xtype: 'dashboarduptimehours', width: 45, height: 40}
                , {xtype: 'dashboarduptimeminutes', width: 45, height: 40}
                , {xtype: 'dashboarduptimeseconds', width: 45, height: 40}
            ]  
        }, {
            xtype: 'container'
            , layout: {type: 'hbox', align: 'center', pack: 'center'}   
            , items: [
                {xtype: 'container', width: 45, cls: 'uptime-digit-label', html: 'years'}  
                , {xtype: 'container', width: 45, cls: 'uptime-digit-label', html: 'days'}
                , {xtype: 'container', width: 45, cls: 'uptime-digit-label', html: 'hours'}
                , {xtype: 'container', width: 45, cls: 'uptime-digit-label', html: 'min'}
                , {xtype: 'container', width: 45, cls: 'uptime-digit-label', html: 's'}
            ]
        }] 
});
