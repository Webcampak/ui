/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.stats.System");
//</debug>
Ext.define("WPAKD.store.stats.System", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.stats.System",

    autoSync: false,

    proxy:{
        type: "direct",
        extraParams: {
            RANGE: "recent"
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
            read: "Stats.getSystemStats"
        }
    }
});
