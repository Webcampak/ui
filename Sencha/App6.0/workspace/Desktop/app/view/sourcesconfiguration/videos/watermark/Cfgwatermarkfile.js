/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkfile");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkfile", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationvideoswatermarkcfgwatermarkfile"

    , fieldLabel: i18n.gettext("Watermark File")
    , store: "sourcesconfiguration.WatermarkFiles"
    , valueField: "NAME"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgwatermarkfile")
        }
    }
});