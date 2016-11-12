/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.audio.Cfgvideoaddaudio");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.audio.Cfgvideoaddaudio", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationvideosaudiocfgvideoaddaudio"

    , fieldLabel: i18n.gettext("Add an audio track")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideoaddaudio");
        }
    }
});

