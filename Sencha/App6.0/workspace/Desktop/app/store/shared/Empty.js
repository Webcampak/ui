/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.shared.Empty");
//</debug>
Ext.define("WPAKD.store.shared.Empty", {
    extend: "Ext.data.Store",

    //model: "WPAKD.model.alerts.Schedule",

    autosync: false,

    proxy: {
        type: "memory"
    }
});
