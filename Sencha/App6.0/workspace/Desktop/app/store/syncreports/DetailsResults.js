/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.syncreports.DetailsResults");
//</debug>
Ext.define("WPAKD.store.syncreports.DetailsResults", {
    extend: "Ext.data.Store"

    , model: "WPAKD.model.syncreports.DetailsResults"
    , autosync: true
    , proxy: {
        type: "memory"
    }
});






