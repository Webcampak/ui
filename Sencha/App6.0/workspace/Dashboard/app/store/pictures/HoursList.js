//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.pictures.HoursList');
//</debug>
Ext.define('WPAKT.store.pictures.HoursList', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.pictures.HoursList',

    autoSync: false,

    proxy:{
        type: 'direct',
        extraParams: {
            SOURCEID: '0'
            , SELECTEDDAY: null
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
            read: 'Pictures.getHoursList'
        }
    }
});
