//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.store.core.Applications');
//</debug>
Ext.define('WPAKT.store.core.Applications', {
    extend: 'Ext.data.Store'

    , model: 'WPAKT.model.core.Applications'

    , proxy:{
        type: 'direct'
        , reader: {
            type: 'json'
            , rootProperty: 'results'
            , totalProperty: 'total'
        }
        , api:{
            read:   'Applications.getApplications'
        }
    }
});
