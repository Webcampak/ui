/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.shared.UserSettings");
//</debug>
Ext.define("WPAKD.model.shared.UserSettings", {
    extend: "Ext.data.Model",

    idProperty : "ID",

    fields: [
        { name: "ID",     type: "int"           }
        , { name: "CODE",     type: "string"    }
        , { name: "VALUE",     type: "string"   }
    ]
});
