/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.devices.Devices");
//</debug>
Ext.define("WPAKD.store.devices.Devices", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.devices.Devices",

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
            read:   "Devices.getDevices"
        }
    }
});
