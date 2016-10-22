/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.PhidgetSensors");
//</debug>
Ext.define("WPAKT.store.config.PhidgetSensors", {
    extend: "Ext.data.Store"

    , model: "WPAKT.model.config.PhidgetSensors"

    , autoLoad: false
    , autoSync: false

    , proxy:{
        type: "direct"
        , extraParams: {
            SOURCEID: "0"
        }
        , writer: {
            writeAllFields:true
        }
        , reader: {
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        }
        , api:{
            read:       "SCMisc.getPhidgetSensors"
        }
    }
});
