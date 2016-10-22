/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.logs.CustomVideos");
//</debug>
Ext.define("WPAKD.store.logs.CustomVideos", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.logs.CustomVideos",

    autoLoad: false,
    autoSync: false,

    proxy:{
        type: "direct",
        extraParams: {
            SOURCEID: "0"
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
            read:   "Logs.getCustomVideosLogs"
        }
    }
});
