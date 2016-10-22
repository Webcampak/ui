/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.loading.Stores");
//</debug>
Ext.define("WPAKD.store.desktop.loading.Stores", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.loading.Stores",

    autosync: true,

    proxy: {
        type: "memory"
    }
});
