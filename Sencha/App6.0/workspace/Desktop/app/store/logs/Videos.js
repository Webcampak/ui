/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.logs.Videos");
//</debug>
Ext.define("WPAKD.store.logs.Videos", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.logs.Videos",

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
            read:   "Logs.getVideosLogs"
        }
    }
});
