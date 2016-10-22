/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.groups.GroupAvailablePermissions");
//</debug>
Ext.define("WPAKD.model.accesscontrol.groups.GroupAvailablePermissions", {
    extend: "Ext.data.Model",
    idProperty: "PER_ID",
    fields: [
        {name: "PER_ID", type: "int"},
        {name: "GRO_ID", type: "int"},
        {name: "NAME", type: "string"},
        {name: "NOTES", type: "string"}
    ]
});

