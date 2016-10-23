/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH2641080pcreateflv");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH2641080pcreateflv", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationvideosformatscfgvideocodecH2641080pcreateflv"

    , fieldLabel: i18n.gettext("Web (MP4)")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH2641080pcreateflv");
        }
    }
});

