//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.syncreports.IntersectChart');
//</debug>
Ext.define('WPAKD.store.syncreports.IntersectChart', {
    extend: 'Ext.data.Store'

    , model: 'WPAKD.model.syncreports.IntersectChart'
    , autosync: true
    , proxy: {
        type: 'memory'
    }
});






