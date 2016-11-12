/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkpositionx");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkpositionx", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositionx"

    , minValue: 0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgwatermarkpositionx");
        }
    }
});

