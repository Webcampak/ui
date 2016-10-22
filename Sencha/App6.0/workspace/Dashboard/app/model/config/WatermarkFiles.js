/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.config.WatermarkFiles");
//</debug>
/*
 * List all matermark files available on the webcampak, merge both resources and source specific watermark files
 */
Ext.define("WPAKT.model.config.WatermarkFiles", {
    extend: "Ext.data.Model"
    , fields: [
        {name: "NAME", type: "string"}
    ]
});
