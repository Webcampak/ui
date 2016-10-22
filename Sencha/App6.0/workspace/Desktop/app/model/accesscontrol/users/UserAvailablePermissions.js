/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.users.UserAvailablePermissions");
//</debug>
Ext.define("WPAKD.model.accesscontrol.users.UserAvailablePermissions", {
    extend: "Ext.data.Model",
    idProperty: "SYSPRI_ID",
    fields: [
        {name: "SYSPRI_ID", type: "int"}
        , {name: "USEPRI_ID", type: "int"}
        , {name: "USE_ID", type: "int"}
        , {name: "CODE", type: "string"}
        , {name: "NOTES", type: "string"}
    ]
});

