/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.FTPServers");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.FTPServers", {
    extend: "Ext.data.Store"

    , model: "WPAKD.model.sourcesconfiguration.FTPServers"

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
