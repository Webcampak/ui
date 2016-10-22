/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.VideoCustom");
//</debug>
/*
 * List all configuration parameters stored in config-sourceX-videocustom.cfg
 */
Ext.define("WPAKT.model.config.VideoCustom", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",     type: "string"     }
        , { name: "VALUE",  type: "string"     }
        , { name: "SOURCEID",   type: "int"    }

    ]
});
