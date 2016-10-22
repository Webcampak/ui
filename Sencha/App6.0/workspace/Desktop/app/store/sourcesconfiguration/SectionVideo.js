/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.SectionVideo");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.SectionVideo", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.SectionVideo",

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
