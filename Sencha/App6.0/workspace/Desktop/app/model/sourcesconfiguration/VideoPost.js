/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.VideoPost");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.VideoPost", {
    extend: "Ext.data.Model",

    fields: [
        { name: "NAME",     type: "string"     }
        , { name: "VALUE",  type: "string"     }
        , { name: "SOURCEID",   type: "int"    }

    ]
});
