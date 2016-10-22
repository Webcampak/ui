/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkdissolve");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkdissolve", {
    extend: "Ext.form.SliderField"
    , alias: "widget.sourcesconfigurationpostprodwatermarkcfgwatermarkdissolve"

    , fieldLabel: i18n.gettext("Transparency")
    , minValue: 0
    , maxValue: 100
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgwatermarkdissolve");
        }
    }
});

