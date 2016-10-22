/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.Capture");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.Capture", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.Capture",

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
            read:   "SCCapture.getCapture"
            , update:   "SCCapture.updateCapture"
        }
    }
});
