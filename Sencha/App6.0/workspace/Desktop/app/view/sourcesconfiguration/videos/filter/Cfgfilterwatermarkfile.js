/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.filter.Cfgfilterwatermarkfile");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.filter.Cfgfilterwatermarkfile", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationvideosfiltercfgfilterwatermarkfile"

    , store: "shared.PhidgetsPorts"
    , fieldLabel: i18n.gettext("Watermark File")
    , valueField: "ID"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgfilterwatermarkfile")
        }
    }
});