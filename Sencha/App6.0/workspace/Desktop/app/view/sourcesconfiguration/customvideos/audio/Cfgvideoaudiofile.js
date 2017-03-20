/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.audio.Cfgvideoaudiofile");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.audio.Cfgvideoaudiofile", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationcustomvideosaudiocfgvideoaudiofile"

    , store: "sourcesconfiguration.AudioFiles"
    , fieldLabel: i18n.gettext("Audio File")
    , valueField: "ID"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideoaudiofile");
        }
    }
});