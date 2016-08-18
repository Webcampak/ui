//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.config.Capture');
//</debug>
Ext.define('WPAKT.store.config.Capture', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.config.Capture',

    autoLoad: false,
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
            read:   'SCCapture.getCapture'
            , update:   'SCCapture.updateCapture'
        }
    }
});
