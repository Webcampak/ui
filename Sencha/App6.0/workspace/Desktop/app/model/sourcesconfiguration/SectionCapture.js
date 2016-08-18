//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.sourcesconfiguration.SectionCapture');
//</debug>
Ext.define('WPAKD.model.sourcesconfiguration.SectionCapture', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'NAME',     type: 'string'     }
    ]
});
