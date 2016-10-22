/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.SectionVideo");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.SectionVideo", {
    extend: "Ext.data.Model",

    fields: [
        { name: "NAME",     type: "string"     }
    ]
});
