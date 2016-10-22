/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.stats.SourcesDiskUsage");
//</debug>
Ext.define("WPAKD.model.stats.SourcesDiskUsage", {
    extend: "Ext.data.Model",

    fields: [
        {name: "DATE",      type: "date"}
        , {name: "SIZE",    type: "int" }
    ]
});
