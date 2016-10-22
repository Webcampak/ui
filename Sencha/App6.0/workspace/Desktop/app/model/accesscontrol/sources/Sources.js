/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.sources.Sources");
//</debug>
Ext.define("WPAKD.model.accesscontrol.sources.Sources", {
    extend: "Ext.data.Model",
    idProperty: "SOU_ID",
    fields: [
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
