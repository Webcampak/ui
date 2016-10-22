/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.shared.Timezones");
//</debug>
Ext.define("WPAKD.model.shared.Timezones", {
    extend: "Ext.data.Model",
    fields: [
        {name: "NAME",    type: "string"}
    ]
});
