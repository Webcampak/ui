/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.Fonts");
//</debug>
/*
 * Used to all fonts contained on the webcampak host
 */
Ext.define("WPAKT.model.config.Fonts", {
    extend: "Ext.data.Model"
    , fields: [
        {name: "NAME", type: "string"}
    ]
});
