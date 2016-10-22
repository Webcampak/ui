/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.desktop.ServerAvailability");
//</debug>
Ext.define("WPAKD.model.desktop.ServerAvailability", {
    extend: "Ext.data.Model",
    fields: [
        {name: "CODE",         type: "string" }
        , {name: "MSG",        type: "string" }
        , {name: "LATENCY",  type: "int"     }
    ]
});
