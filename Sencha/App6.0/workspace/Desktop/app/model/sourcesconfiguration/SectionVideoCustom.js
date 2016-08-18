//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.sourcesconfiguration.SectionVideoCustom');
//</debug>
Ext.define('WPAKD.model.sourcesconfiguration.SectionVideoCustom', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'NAME',     type: 'string'     }
    ]
});
