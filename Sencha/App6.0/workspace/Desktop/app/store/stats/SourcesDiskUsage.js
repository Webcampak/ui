/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.stats.SourcesDiskUsage");
//</debug>
Ext.define("WPAKD.store.stats.SourcesDiskUsage", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.stats.SourcesDiskUsage",

    autoSync: false,

    proxy:{
        type: "direct",
        extraParams: {
            SOURCEID: null
            , RANGE: "day"
        },
        writer: {
            writeAllFields:true
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read: "Stats.getSourcesDiskUsage"
        }
    }
});
