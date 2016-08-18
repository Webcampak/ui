//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.uptime.Years');
//</debug>
Ext.define('WPAKT.view.dashboard.uptime.Years', {
    extend: 'Ext.container.Container'
    , alias: 'widget.dashboarduptimeyears'
    , cls: 'uptime-digit-number'
    , html: ''
});
