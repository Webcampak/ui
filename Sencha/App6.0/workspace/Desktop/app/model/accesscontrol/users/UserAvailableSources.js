/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.users.UserAvailableSources");
//</debug>
Ext.define("WPAKD.model.accesscontrol.users.UserAvailableSources", {
    extend: "Ext.data.Model",
    idProperty: "USESOU_ID",
    fields: [
        {name: "USESOU_ID",     type: "int"}
        , {name: "SOU_ID",      type: "int"}
        , {name: "USE_ID",      type: "int"}
        , {name: "NAME",        type: "string"}
        , {name: "NOTES",       type: "string"}
        , {name: "ALERTS_FLAG", type: "string"}
    ]
});

