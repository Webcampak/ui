/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.FTPServers");
//</debug>
Ext.define("WPAKT.store.config.FTPServers", {
    extend: "Ext.data.Store"

    , model: "WPAKT.model.config.FTPServers"

    , autoLoad: false
    , autoSync: false

    , proxy:{
        type: "direct"
        , extraParams: {
            SOURCEID: "0"
        }
        , writer: {
            writeAllFields:true
        }
        , reader: {
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        }
        , api:{
            read:       "SCFTPServers.getFTPServers"
            , create:   "SCFTPServers.updateFTPServer"
            , destroy:  "SCFTPServers.removeFTPServer"
            , update:   "SCFTPServers.updateFTPServer"
        }
    }
});
