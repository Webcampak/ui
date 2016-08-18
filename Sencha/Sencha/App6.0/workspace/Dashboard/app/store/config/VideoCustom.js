//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.config.VideoCustom');
//</debug>
Ext.define('WPAKT.store.config.VideoCustom', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.config.VideoCustom',

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
            read:   'SCVideoCustom.getVideoCustom'
            , update:   'SCVideoCustom.updateVideoCustom'
        }
    }
});
