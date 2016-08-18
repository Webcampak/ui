//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.sourcesconfiguration.PhidgetSensors');
//</debug>
Ext.define('WPAKD.store.sourcesconfiguration.PhidgetSensors', {
    extend: 'Ext.data.Store'

    , model: 'WPAKD.model.sourcesconfiguration.PhidgetSensors'

    , autoLoad: false
    , autoSync: false

    , proxy:{
        type: 'direct'
        , extraParams: {
            SOURCEID: '0'
        }
        , writer: {
            writeAllFields:true
        }
        , reader: {
            type: 'json'
            , rootProperty: 'results'
            , totalProperty: 'total'
        }
        , api:{
            read:       'SCMisc.getPhidgetSensors'
        }
    }
});
