/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.config.PhidgetPorts");
//</debug>
Ext.define("WPAKT.store.config.PhidgetPorts", {
    extend: "Ext.data.Store"

    , model: "WPAKT.model.config.PhidgetPorts"
    , autosync: true
    , proxy: {
        type: "memory"
    }
});
