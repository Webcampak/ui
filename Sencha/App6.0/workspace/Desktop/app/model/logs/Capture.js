/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.logs.Capture");
//</debug>
Ext.define("WPAKD.model.logs.Capture", {
    extend: "Ext.data.Model",
    fields: [
        {name: "LINE", 	type: "int"}
        , {name: "CONTENT", type: "string"}
    ]
});
