/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.SectionVideoPost");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.SectionVideoPost", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.SectionVideoPost",

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
