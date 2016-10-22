/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.SectionVideoCustom");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.SectionVideoCustom", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.SectionVideoCustom",

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
            read:   "SCVideoCustom.getSectionVideoCustom"
        }
    }
});
