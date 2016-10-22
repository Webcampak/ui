/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkpositiony");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkpositiony", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositiony"

    , minValue: 0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgwatermarkpositiony")
        }
    }
});

