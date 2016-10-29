/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.syncreports.SyncReports");
//</debug>
Ext.define("WPAKD.store.syncreports.SyncReports", {
    extend: "Ext.data.Store"

    , model: "WPAKD.model.syncreports.SyncReports"

    , autoSync: true
    , groupField: "NAME"
    , proxy:{
        type: "direct"
        , writer: {
            writeAllFields: true
        }
        , reader: {
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        }
        , api:{
            read: "SyncReports.getSyncReports"
            , create:    "SyncReports.createSyncReport"
            , destroy:   "SyncReports.removeSyncReport"
            , update:    "SyncReports.createSyncReport"
        }
    }
});






