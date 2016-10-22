/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.Fonts");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.Fonts", {
    extend: "Ext.data.Model",
    fields: [
        {name: "NAME", type: "string"}
    ]
});
