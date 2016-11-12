/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.resize.Cfgvideosizeheight");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.resize.Cfgvideosizeheight", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodresizecfgvideosizeheight"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideosizeheight");
        }
    }
});
