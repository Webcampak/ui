/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.alerts.Schedule");
//</debug>
Ext.define("WPAKD.store.alerts.Schedule", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.alerts.Schedule",

    autosync: true,

    proxy: {
        type: "memory"
    }
});
