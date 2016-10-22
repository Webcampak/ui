/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.SectionVideoPost");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.SectionVideoPost", {
    extend: "Ext.data.Model",

    fields: [
        { name: "NAME",     type: "string"     }
    ]
});
