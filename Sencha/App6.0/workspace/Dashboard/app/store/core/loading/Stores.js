/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.core.loading.Stores");
//</debug>
Ext.define("WPAKT.store.core.loading.Stores", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.core.loading.Stores",

    autosync: true,

    proxy: {
        type: "memory"
    }
});
