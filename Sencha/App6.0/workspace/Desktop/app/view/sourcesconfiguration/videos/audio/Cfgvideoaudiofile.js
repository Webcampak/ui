/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.audio.Cfgvideoaudiofile");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.audio.Cfgvideoaudiofile", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationvideosaudiocfgvideoaudiofile"

    , fieldLabel: i18n.gettext("Audio File")
    , store: "shared.PhidgetsPorts"
    , valueField: "ID"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideoaudiofile");
        }
    }
});