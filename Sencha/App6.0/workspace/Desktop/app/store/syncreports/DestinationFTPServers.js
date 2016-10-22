/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.syncreports.DestinationFTPServers");
//</debug>
Ext.define("WPAKD.store.syncreports.DestinationFTPServers", {
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
        }
    }
});
