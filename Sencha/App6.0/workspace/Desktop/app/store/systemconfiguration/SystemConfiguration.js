/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.systemconfiguration.SystemConfiguration");
//</debug>
Ext.define("WPAKD.store.systemconfiguration.SystemConfiguration", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.systemconfiguration.SystemConfiguration",

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
            read:   "SystemConfiguration.getConfiguration"
            , update:   "SystemConfiguration.updateConfiguration"
        }
    }
});
