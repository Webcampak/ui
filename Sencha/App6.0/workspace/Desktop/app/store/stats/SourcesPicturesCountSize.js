//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.stats.SourcesPicturesCountSize');
//</debug>
Ext.define('WPAKD.store.stats.SourcesPicturesCountSize', {
    extend: 'Ext.data.Store',

    model: 'WPAKD.model.stats.SourcesPicturesCountSize',

    autoSync: false,

    proxy:{
        type: 'direct',
        extraParams: {
            SOURCEID: null
            , RANGE: 'day'
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
            read: 'Stats.getSourcesPicturesCountSize'
        }
    }
});
