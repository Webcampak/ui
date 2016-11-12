/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.logs.Postprod");
//</debug>
Ext.define("WPAKD.model.logs.Postprod", {
    extend: "Ext.data.Model",
    fields: [
        {name: "LINE", 	type: "int"}
        , {name: "CONTENT", type: "string"}
    ]
});
