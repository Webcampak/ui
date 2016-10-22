/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.resize.Cfgvideosizewidth");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.resize.Cfgvideosizewidth", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodresizecfgvideosizewidth"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideosizewidth");
        }
    }
});
