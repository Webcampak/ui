/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.shared.Timezones");
//</debug>
Ext.define("WPAKD.store.shared.Timezones", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.shared.Timezones",

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
            read:      "Administrative.getTimezones"
        }
    }
});






