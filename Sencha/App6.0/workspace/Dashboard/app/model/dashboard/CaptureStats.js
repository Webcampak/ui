/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.dashboard.CaptureStats");
//</debug>
Ext.define("WPAKT.model.dashboard.CaptureStats", {
    extend: "Ext.data.Model",
    fields: [
        {name: "xvalue", type: "string" }
        , {name: "y1value", type: "int" }
        , {name: "y2value", type: "int" }
    ]
});
