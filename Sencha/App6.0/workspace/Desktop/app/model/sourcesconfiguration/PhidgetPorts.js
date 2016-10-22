/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.sourcesconfiguration.PhidgetPorts");
//</debug>
Ext.define("WPAKD.model.sourcesconfiguration.PhidgetPorts", {
    extend: "Ext.data.Model"

    , idProperty : "ID"
    , fields: [
        { name: "ID",       type: "int"          }
        , { name: "NAME",   type: "string"       }
        , { name: "PORT",   type: "string"       }
        , { name: "LEGEND", type: "string"       }
        , { name: "COLOR",  type: "string"       }
    ]
});
