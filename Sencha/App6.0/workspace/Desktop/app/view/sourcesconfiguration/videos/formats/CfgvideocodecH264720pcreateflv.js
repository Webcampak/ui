/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264720pcreateflv");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264720pcreateflv", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationvideosformatscfgvideocodecH264720pcreateflv"

    , fieldLabel: i18n.gettext("Web (MP4)")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH264720pcreateflv");
        }
    }
});

