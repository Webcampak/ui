/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomkeependhour");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomkeependhour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcreatecfgcustomkeependhour"

    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgcustomkeependhour");
        }
    }
});
