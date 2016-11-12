/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.FTPServers");
//</debug>
/*
 * Used for FTP servers contained in confg-sourceX-ftpservers.cfg
 */
Ext.define("WPAKT.model.config.FTPServers", {
    extend: "Ext.data.Model"

    , idProperty : "ID"
    , identifier: {
        type: "sequential"
        , prefix: "FTP_"
        , seed: 1000
        , increment: 10
    }
    , fields: [
        { name: "ID",           type: "int"   }
        , { name: "NAME",       type: "string"}
        , { name: "HOST",       type: "string"}
        , { name: "USERNAME",   type: "string"}
        , { name: "PASSWORD",   type: "string"}
        , { name: "DIRECTORY",  type: "string"}
        , { name: "ACTIVE",     type: "string"}
        , { name: "SOURCEID",   type: "int"   }
    ]
});
