/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkpositiony");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkpositiony", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodwatermarkcfgwatermarkpositiony"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgwatermarkpositiony");
        }
    }
});

