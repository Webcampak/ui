/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.pictures.HoursCombo");
//</debug>
Ext.define("WPAKT.model.pictures.HoursCombo", {
    extend: "Ext.data.Model",
    fields: [
        { name: "PICTURE", type: "string"}
        , { name: "TIME", type: "string"}
    ]
});
