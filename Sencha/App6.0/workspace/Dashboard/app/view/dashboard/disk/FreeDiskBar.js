//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.disk.FreeDiskBar');
//</debug>
Ext.define('WPAKT.view.dashboard.disk.FreeDiskBar', {
    extend: 'Ext.ProgressBar'
    , alias: 'widget.dashboarddiskfreediskbar'

    , cls: 'bottom-indent service-finance'
    , height: 4
    , minHeight: 4
    , value: 0
});
