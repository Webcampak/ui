/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.Video");
//</debug>
/*
 * List all configuration parameters stored in config-sourceX-video.cfg
 */
Ext.define("WPAKT.model.config.Video", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",     type: "string"     }
        , { name: "VALUE",  type: "string"     }
        , { name: "SOURCEID",   type: "int"    }
    ]
});
