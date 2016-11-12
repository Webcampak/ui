/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomstarthour");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomstarthour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcustomvideoscreatecfgcustomstarthour"

    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgcustomstarthour");
        }
    }
});
