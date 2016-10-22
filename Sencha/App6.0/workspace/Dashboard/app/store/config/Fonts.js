/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.Fonts");
//</debug>
Ext.define("WPAKT.store.config.Fonts", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.config.Fonts",

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






