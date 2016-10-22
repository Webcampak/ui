/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.SectionVideoCustom");
//</debug>
Ext.define("WPAKT.model.config.SectionVideoCustom", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",     type: "string"     }
    ]
});
