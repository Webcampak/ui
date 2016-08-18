//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.shared.UsbPorts');
//</debug>
Ext.define('WPAKD.model.shared.UsbPorts', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'ID',    type: 'string'}
        , {name: 'NAME',    type: 'string'}
    ]
});
