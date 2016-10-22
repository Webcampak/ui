/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.VideoPost");
//</debug>
Ext.define("WPAKT.store.config.VideoPost", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.config.VideoPost",

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
            read:   "SCVideoPost.getVideoPost"
            , update:   "SCVideoPost.updateVideoPost"
        }
    }
});
