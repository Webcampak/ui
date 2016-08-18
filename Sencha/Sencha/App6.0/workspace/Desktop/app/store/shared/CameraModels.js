//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.shared.CameraModels');
//</debug>
Ext.define('WPAKD.store.shared.CameraModels', {
    extend: 'Ext.data.Store',

    model: 'WPAKD.model.shared.CameraModels',

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
            read:      'Administrative.getCameraModels'
        }
    }
});






