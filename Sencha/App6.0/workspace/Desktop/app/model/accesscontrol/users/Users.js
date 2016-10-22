/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.users.Users");
//</debug>
Ext.define("WPAKD.model.accesscontrol.users.Users", {
    extend: "Ext.data.Model",
    idProperty: "USE_ID",
    fields: [
        {name: "USE_ID",            type: "int"}
        , {name: "CUS_ID",          type: "int"}
        , {name: "GRO_ID",          type: "int"}
        , {name: "USERNAME",        type: "string"}
        , {name: "PASSWORD",        type: "string"}
        , {name: "FIRSTNAME",       type: "string"}
        , {name: "LASTNAME",        type: "string"}
        , {name: "EMAIL",           type: "string"}
        , {name: "CHANGE_PWD_FLAG", type: "string"}
        , {name: "ACTIVE_FLAG",     type: "string"}
        , {name: "SALT",            type: "string"}
    ]
});

