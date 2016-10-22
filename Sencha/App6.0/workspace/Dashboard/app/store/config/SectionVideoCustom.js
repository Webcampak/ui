/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.SectionVideoCustom");
//</debug>
Ext.define("WPAKT.store.config.SectionVideoCustom", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.config.SectionVideoCustom",

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
