/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkdissolve");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkdissolve", {
    extend: "Ext.form.SliderField"
    , alias: "widget.sourcesconfigurationpictureswatermarkcfgpicwatermarkdissolve"

    , fieldLabel: i18n.gettext("Transparency")
    , minValue: 0
    , maxValue: 100
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgpicwatermarkdissolve");
        }
    }
});

