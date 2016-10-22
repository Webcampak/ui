/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkdissolve");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkdissolve", {
    extend: "Ext.form.SliderField"
    , alias: "widget.sourcesconfigurationcustomvideoswatermarkcfgwatermarkdissolve"

    , fieldLabel: i18n.gettext("Transparency")
    , minValue: 0
    , maxValue: 100
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgwatermarkdissolve");
        }
    }
});

