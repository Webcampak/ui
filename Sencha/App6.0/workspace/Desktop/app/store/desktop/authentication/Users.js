/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.authentication.Users");
//</debug>
Ext.define("WPAKD.store.desktop.authentication.Users", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.authentication.Users",

    autosync: true,

    proxy: {
        type: "memory"
    }
});
