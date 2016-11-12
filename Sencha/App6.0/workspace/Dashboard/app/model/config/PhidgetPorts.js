/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.PhidgetPorts");
//</debug>
/*
 * List all phidget ports available on the system, stored in config-sourceX.cfg
 */
Ext.define("WPAKT.model.config.PhidgetPorts", {
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
