/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomstartminute");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomstartminute", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcustomvideoscreatecfgcustomstartminute"

    , allowBlank: false
    , minValue:0
    , maxValue:59
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgcustomstartminute");
        }
    }
});
