/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.Video");
//</debug>
Ext.define("WPAKT.store.config.Video", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.config.Video",

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
