/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.SectionCapture");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.SectionCapture", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.SectionCapture",

    autoLoad: false,
    autoSync: false,

    proxy:{
        type: "direct",
        writer: {
            writeAllFields:true
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read:   "SCCapture.getSectionCapture"
        }
    }
});
