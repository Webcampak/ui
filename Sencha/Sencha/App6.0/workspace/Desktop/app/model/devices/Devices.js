//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.devices.Devices');
//</debug>
Ext.define('WPAKD.model.devices.Devices', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'GPHOTOLIST',            type: 'string'}
        , {name: 'GPHOTOCAPABILITIES',  type: 'string'}
        , {name: 'LSUSB',               type: 'string'}
    ]
});

