/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkpositionx");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkpositionx", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodwatermarkcfgwatermarkpositionx"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgwatermarkpositionx");
        }
    }
});

