/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.ServerAvailability");
//</debug>
Ext.define("WPAKD.store.desktop.ServerAvailability", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.ServerAvailability",

    autosync: true,

    proxy: {
        type: "memory"
    }
});
