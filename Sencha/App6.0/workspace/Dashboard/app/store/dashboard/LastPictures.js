//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.dashboard.LastPictures');
//</debug>
Ext.define('WPAKT.store.dashboard.LastPictures', {
    extend: 'Ext.data.Store'

    , model: 'WPAKT.model.dashboard.LastPictures'

    , autosync: true

    , proxy: {
        type: 'memory'
    }

});
