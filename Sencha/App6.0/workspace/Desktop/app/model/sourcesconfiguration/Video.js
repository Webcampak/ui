/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.Video");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.Video", {
    extend: "Ext.data.Model",

    fields: [
        { name: "NAME",     type: "string"     }
        , { name: "VALUE",  type: "string"     }
        , { name: "SOURCEID",   type: "int"    }
    ]
});
