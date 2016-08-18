//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.shared.UsbPorts');
//</debug>
Ext.define('WPAKD.store.shared.UsbPorts', {
    extend: 'Ext.data.Store',

    model: 'WPAKD.model.shared.UsbPorts',

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
            read:      'Administrative.getUsbPorts'
        }
    }
});






