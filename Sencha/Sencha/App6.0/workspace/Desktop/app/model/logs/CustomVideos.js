//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.logs.CustomVideos');
//</debug>
Ext.define('WPAKD.model.logs.CustomVideos', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'LINE', 	type: 'int'}
        , {name: 'CONTENT', type: 'string'}
    ]
});
