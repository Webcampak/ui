/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomstarthour");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomstarthour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcreatecfgcustomstarthour"

    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.Videos.updateStoreValue", newValue, oldValue, "cfgcustomstarthour");
        }
    }
});
