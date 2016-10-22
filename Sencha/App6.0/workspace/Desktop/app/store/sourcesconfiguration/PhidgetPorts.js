/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.sourcesconfiguration.PhidgetPorts");
//</debug>
Ext.define("WPAKD.store.sourcesconfiguration.PhidgetPorts", {
    extend: "Ext.data.Store"

    , model: "WPAKD.model.sourcesconfiguration.PhidgetPorts"
    , autosync: true
    , proxy: {
        type: "memory"
    }
});
