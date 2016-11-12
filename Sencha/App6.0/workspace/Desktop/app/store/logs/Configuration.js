/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.logs.Configuration");
//</debug>
Ext.define("WPAKD.store.logs.Configuration", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.logs.Configuration",

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
            read:   "Logs.getConfigurationLogs"
        }
    }
});
