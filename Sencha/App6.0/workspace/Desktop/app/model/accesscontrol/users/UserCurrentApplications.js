/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.users.UserCurrentApplications");
//</debug>
Ext.define("WPAKD.model.accesscontrol.users.UserCurrentApplications", {
    extend: "Ext.data.Model",
    idProperty: "AUTUSEAPP_ID",
    fields: [
        {name: "AUTUSEAPP_ID", type: "int"}
        , {name: "APP_ID", type: "int"}
        , {name: "USE_ID", type: "int"}
        , {name: "LABEL", type: "string"}
    ]
});

