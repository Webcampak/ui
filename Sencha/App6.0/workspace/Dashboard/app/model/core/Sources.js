/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.core.Sources");
//</debug>
/*
 * Used to store sources currently available to the user
 */
Ext.define("WPAKT.model.core.Sources", {
    extend: "Ext.data.Model"
    
    , idProperty: "SOU_ID"
    , fields: [
        {name: "SOU_ID",            type: "int"}
        , {name: "NAME",            type: "string"}
        , {name: "SOURCEID",        type: "int"}
        , {name: "WEIGHT",          type: "int"}
        , {name: "QUOTA",           type: "int"}
        , {name: "REMOTE_HOST",     type: "string"}
        , {name: "REMOTE_USERNAME", type: "string"}
        , {name: "REMOTE_PASSWORD", type: "string"}
    ]
});
