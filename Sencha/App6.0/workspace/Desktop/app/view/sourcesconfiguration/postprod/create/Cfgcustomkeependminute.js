/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomkeependminute");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomkeependminute", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcreatecfgcustomkeependminute"

    , allowBlank: false
    , minValue:0
    , maxValue:59
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgcustomkeependminute");
        }
    }
});
