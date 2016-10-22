/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.shared.PhidgetsPorts");
//</debug>
Ext.define("WPAKD.store.shared.PhidgetsPorts", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.shared.PhidgetsPorts",

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
            read:      "Administrative.getPhidgetsPorts"
        }
    }
});






