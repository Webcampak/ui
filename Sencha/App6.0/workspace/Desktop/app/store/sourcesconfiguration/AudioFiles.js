/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.AudioFiles");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.AudioFiles", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.AudioFiles",

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
            read:      "SCMisc.getAudioFiles"
        }
    }
});






