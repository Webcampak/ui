/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.core.Sources");
//</debug>
Ext.define("WPAKT.store.core.Sources", {
    extend: "Ext.data.Store"

    , model: "WPAKT.model.core.Sources"

    , proxy:{
        type: "direct"
        , reader: {
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        }
        , api:{
            read: "Sources.getSources"
        }
    }
});






