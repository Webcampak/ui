//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.logs.Videos');
//</debug>
Ext.define('WPAKD.model.logs.Videos', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'LINE', 	type: 'int'}
        , {name: 'CONTENT', type: 'string'}
    ]
});
