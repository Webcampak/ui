/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkpositionx");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkpositionx", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationvideoswatermarkcfgwatermarkpositionx"

    , fieldLabel: i18n.gettext("X")
    , minValue: 0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgwatermarkpositionx")
        }
    }
});

