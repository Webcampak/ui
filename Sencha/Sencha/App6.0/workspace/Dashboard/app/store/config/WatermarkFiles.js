//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.config.WatermarkFiles');
//</debug>
Ext.define('WPAKT.store.config.WatermarkFiles', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.config.WatermarkFiles',

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
            read:      'SCMisc.getWatermarkFiles'
        }
    }
});






