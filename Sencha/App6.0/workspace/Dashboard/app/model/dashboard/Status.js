/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.dashboard.Status");
//</debug>
Ext.define("WPAKT.model.dashboard.Status", {
    extend: "Ext.data.Model",
    fields: [
        {name: "UPTIME", type: "int" }
        , {name: "STATUS", type: "string" }
    ]
});
