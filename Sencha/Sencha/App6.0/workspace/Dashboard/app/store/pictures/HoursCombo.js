//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.pictures.HoursCombo');
//</debug>
Ext.define('WPAKT.store.pictures.HoursCombo', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.pictures.HoursCombo',

    autosync: true,

    proxy: {
        type: 'memory'
    }
});
