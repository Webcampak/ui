/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.dashboard.CaptureStats");
//</debug>
Ext.define("WPAKT.store.dashboard.CaptureStats", {
    extend: "Ext.data.Store"

    , model: "WPAKT.model.dashboard.CaptureStats"

    , autosync: true

    , proxy: {
        type: "memory"
    }

});
