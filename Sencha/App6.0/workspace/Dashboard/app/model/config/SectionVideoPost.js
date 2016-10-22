/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.SectionVideoPost");
//</debug>
Ext.define("WPAKT.model.config.SectionVideoPost", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",     type: "string"     }
    ]
});
