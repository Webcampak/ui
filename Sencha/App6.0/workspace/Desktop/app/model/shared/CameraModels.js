//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.shared.CameraModels');
//</debug>
Ext.define('WPAKD.model.shared.CameraModels', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'NAME',    type: 'string'}
    ]
});
