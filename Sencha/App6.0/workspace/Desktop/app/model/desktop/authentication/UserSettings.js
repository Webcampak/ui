/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.desktop.authentication.UserSettings");
//</debug>
Ext.define("WPAKD.model.desktop.authentication.UserSettings", {
    extend: "Ext.data.Model",

    idProperty : "ID",

    fields: [
        { name: "ID",     type: "int"              }
        , { name: "CODE",     type: "string"     }
        , { name: "VALUE",     type: "string"    }
    ]
});
