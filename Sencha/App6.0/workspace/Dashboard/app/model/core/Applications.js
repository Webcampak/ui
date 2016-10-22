/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.core.Applications");
//</debug>
/*
 * List all applications available to the user
 */
Ext.define("WPAKT.model.core.Applications", {
    extend: "Ext.data.Model"

    , idProperty : "APP_ID"
    , fields: [
        { name: "APP_ID",     type: "int"        }
        , { name: "CODE",     type: "string"     }
        , { name: "NAME",     type: "string"     }
    ]
});
