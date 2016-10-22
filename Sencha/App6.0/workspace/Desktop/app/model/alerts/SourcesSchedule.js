/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.alerts.SourcesSchedule");
//</debug>
Ext.define("WPAKD.model.alerts.SourcesSchedule", {
    extend: "Ext.data.Model",
    idProperty: "SOURCEID",
    fields: [
        {name: "SOURCEID",            type: "int"}
        , {name: "JSON",            type: "string"}
    ]
});
