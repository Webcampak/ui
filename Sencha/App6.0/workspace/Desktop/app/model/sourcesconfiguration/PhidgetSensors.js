/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.PhidgetSensors");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.PhidgetSensors", {
    extend: "Ext.data.Model"

    , idProperty : "ID"
    , fields: [
        { name: "ID",     type: "int"           }
        , { name: "NAME",  type: "string"       }
    ]
});
