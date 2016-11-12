/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.shared.PhidgetsPorts");
//</debug>
Ext.define("WPAKD.model.shared.PhidgetsPorts", {
    extend: "Ext.data.Model",
    fields: [
        {name: "ID", type: "int"}
        , {name: "NAME", type: "string"}
    ]
});
