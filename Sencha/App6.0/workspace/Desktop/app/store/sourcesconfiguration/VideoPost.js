//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.sourcesconfiguration.VideoPost');
//</debug>
Ext.define('WPAKD.store.sourcesconfiguration.VideoPost', {
    extend: 'Ext.data.Store',

    model: 'WPAKD.model.sourcesconfiguration.VideoPost',

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
            read:   'SCVideoPost.getVideoPost'
            , update:   'SCVideoPost.updateVideoPost'
        }
    }
});
