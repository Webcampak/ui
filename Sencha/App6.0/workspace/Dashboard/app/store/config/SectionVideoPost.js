/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.SectionVideoPost");
//</debug>
Ext.define("WPAKT.store.config.SectionVideoPost", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.config.SectionVideoPost",

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
            read:   "SCVideoPost.getSectionVideoPost"
        }
    }
});
