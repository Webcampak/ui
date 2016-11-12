/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.ConfigurationTabs");
//</debug>
Ext.define("WPAKT.store.config.ConfigurationTabs", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.config.ConfigurationTabs",

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
