/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomendhour");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomendhour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcreatecfgcustomendhour"

    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.Videos.updateStoreValue", newValue, oldValue, "cfgcustomendhour");
        }
    }
});
