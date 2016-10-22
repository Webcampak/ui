/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.Fonts");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.Fonts", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.Fonts",

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
            read:      "SCMisc.getFonts"
        }
    }
});






