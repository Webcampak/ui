/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264480pcreate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264480pcreate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationvideosformatscfgvideocodecH264480pcreate"

    , fieldLabel: i18n.gettext("H. 264 (480p)")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH264480pcreate");
        }
    }
});

