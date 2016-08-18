//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.dashboard.Status');
//</debug>
Ext.define('WPAKT.store.dashboard.Status', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.dashboard.Status',

    autosync: true,

    proxy: {
        type: 'memory'
    }
});
