//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.sourcesconfiguration.WatermarkFiles');
//</debug>
Ext.define('WPAKD.model.sourcesconfiguration.WatermarkFiles', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'NAME', type: 'string'}
    ]
});
