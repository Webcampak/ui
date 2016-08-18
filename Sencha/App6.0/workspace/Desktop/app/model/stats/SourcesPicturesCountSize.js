//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.stats.SourcesPicturesCountSize');
//</debug>
Ext.define('WPAKD.model.stats.SourcesPicturesCountSize', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'DATE',      type: 'date'}
        , {name: 'COUNT',   type: 'int'}
        , {name: 'SIZE',    type: 'int'}

    ]
});
