/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.crop.Cfgpostprodsizeheight");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.crop.Cfgcropsizeheight", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcropcfgcropsizeheight"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgcropsizeheight");
        }
    }
});
