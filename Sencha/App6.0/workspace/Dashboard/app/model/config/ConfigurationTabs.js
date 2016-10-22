/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.ConfigurationTabs");
//</debug>
/*
 * This model is used for configuration tabs available to the currently connected user
 */
Ext.define("WPAKT.model.config.ConfigurationTabs", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",     type: "string"     }
    ]
});
