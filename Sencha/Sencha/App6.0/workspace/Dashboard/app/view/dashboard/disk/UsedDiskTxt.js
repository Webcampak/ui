//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.dashboard.disk.UsedDiskTxt');
//</debug>
Ext.define('WPAKT.view.dashboard.disk.UsedDiskTxt', {
    extend: 'Ext.Component'
    , alias: 'widget.dashboarddiskuseddisktxt'

    , data: {
        value: 'n/a'
        , percent: 'n/a'
    }
    , tpl: '<div class="left-aligned-div">Used</div><div class="right-aligned-div">{value} ({percent})</div>'
});
