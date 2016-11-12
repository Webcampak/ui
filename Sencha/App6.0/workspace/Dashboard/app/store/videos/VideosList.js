/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.videos.VideosList");
//</debug>
Ext.define("WPAKT.store.videos.VideosList", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.videos.VideosList",

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
