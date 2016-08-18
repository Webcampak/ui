//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.pictures.DaysList');
//</debug>
Ext.define('WPAKD.store.pictures.DaysList', {
    extend: 'Ext.data.Store',

    model: 'WPAKD.model.pictures.DaysList',

    autoSync: false,

    proxy:{
        type: 'direct',
        extraParams: {
            SOURCEID: '0'
        },
        writer: {
            writeAllFields:true
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total'
        },
        api:{
            read: 'Pictures.getDaysList'
        }
    }
});
