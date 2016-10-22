/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.ConfigurationTabs");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.ConfigurationTabs", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.sourcesconfiguration.ConfigurationTabs",

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
            read:   "SCWindow.getConfigurationTabs"
        }
    }
});
