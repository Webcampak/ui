/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.logs.Capture");
//</debug>
Ext.define("WPAKD.store.logs.Capture", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.logs.Capture",

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
            read:   "Logs.getCaptureLogs"
        }
    }
});
