//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.pictures.Sensors');
//</debug>
Ext.define('WPAKT.store.pictures.Sensors', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.pictures.Sensors',

    autoSync: false,

    proxy:{
        type: 'direct',
        extraParams: {
            SOURCEID: '0'
            , PICTUREDATE: null
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
            read: 'Pictures.getSensors'
        }
    }
});
