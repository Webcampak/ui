/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.core.authentication.UserSettings");
//</debug>
/*
 * Store user settings
 */
Ext.define("WPAKT.model.core.authentication.UserSettings", {
    extend: "Ext.data.Model"

    , idProperty : "ID"
    , fields: [
        { name: "ID",     type: "int"            }
        , { name: "CODE",     type: "string"     }
        , { name: "VALUE",     type: "string"    }
    ]
});
