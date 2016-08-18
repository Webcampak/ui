//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.core.ServerAvailability');
//</debug>
Ext.define('WPAKT.store.core.ServerAvailability', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.core.ServerAvailability',

    autosync: true,

    proxy: {
        type: 'memory'
    }
});
