/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.SectionVideo");
//</debug>
Ext.define("WPAKT.store.config.SectionVideo", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.config.SectionVideo",

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
            read:   "SCVideo.getSectionVideo"
        }
    }
});
