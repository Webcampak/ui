//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.sourcesstatus.RefreshTool');
//</debug>
Ext.define('WPAKT.view.dashboard.sourcesstatus.RefreshTool', {
    extend: 'Ext.panel.Tool'
    , alias: 'widget.dashboardsourcesstatusrefreshtool'

    , toggleValue: false
    , cls: 'x-fa fa-refresh dashboard-tools'
    , width: 20
    , height: 20
});
