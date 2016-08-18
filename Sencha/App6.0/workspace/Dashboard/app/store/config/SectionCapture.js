//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.config.SectionCapture');
//</debug>
Ext.define('WPAKT.store.config.SectionCapture', {
    extend: 'Ext.data.Store',

    model: 'WPAKT.model.config.SectionCapture',

    autoLoad: false,
    autoSync: false,

    proxy:{
        type: 'direct',
        writer: {
            writeAllFields:true
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total'
        },
        api:{
            read:   'SCCapture.getSectionCapture'
        }
    }
});
