//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.model.dashboard.LastPictures');
//</debug>
Ext.define('WPAKT.model.dashboard.LastPictures', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'URL',           type: 'string' }
        , {name: 'SOURCENAME',  type: 'string' }
        , {name: 'DATE',        type: 'string' }
    ]
});
