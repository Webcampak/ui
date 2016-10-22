/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.Video");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.Video", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.Video",

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
            read:   "SCVideo.getVideo"
            , update:   "SCVideo.updateVideo"
        }
    }
});
