/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.VideoPost");
//</debug>
/*
 * List all configuration parameters stored in config-sourceX-videopost.cfg
 */
Ext.define("WPAKT.model.config.VideoPost", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",     type: "string"     }
        , { name: "VALUE",  type: "string"     }
        , { name: "SOURCEID",   type: "int"    }

    ]
});
