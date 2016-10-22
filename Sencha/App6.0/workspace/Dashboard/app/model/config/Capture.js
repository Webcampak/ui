/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.Capture");
//</debug>
/*
 * This model is used for configuration values contained in config-sourceX.cfg
 */
Ext.define("WPAKT.model.config.Capture", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",         type: "string"     }
        , { name: "VALUE",      type: "string"     }
        , { name: "SOURCEID",   type: "int"        }
    ]
});
