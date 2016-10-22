/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.core.authentication.Users");
//</debug>
/*
 * Store details about the authenticated user
 */
Ext.define("WPAKT.model.core.authentication.Users", {
    extend: "Ext.data.Model"
    
    , fields: [
        {name: "USE_ID",            type: "int"    }
        , {name: "USERNAME",        type: "string" }
        , {name: "AUTH_TOKEN",      type: "string" }
        , {name: "AUTHENTICATED",   type: "string" } // Y or N
    ]
});
