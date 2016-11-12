/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.SectionVideo");
//</debug>
Ext.define("WPAKT.model.config.SectionVideo", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",     type: "string"     }
    ]
});
