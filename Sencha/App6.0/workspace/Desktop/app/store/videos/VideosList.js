/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.videos.VideosList");
//</debug>
Ext.define("WPAKD.store.videos.VideosList", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.videos.VideosList",

    autoSync: false,

    proxy:{
        type: "direct",
        extraParams: {
            SOURCEID: "0"
//            , SELECTEDDAY: null
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
            read: "Videos.getVideosList"
        }
    }
});
