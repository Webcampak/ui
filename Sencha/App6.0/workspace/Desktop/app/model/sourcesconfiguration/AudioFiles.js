/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.AudioFiles");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.AudioFiles", {
    extend: "Ext.data.Model",
    fields: [
        {name: "NAME", type: "string"}
    ]
});
