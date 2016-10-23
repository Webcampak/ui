/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH2641080pcreate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH2641080pcreate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreate"

    , fieldLabel: i18n.gettext("H. 264 (1080p)")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH2641080pcreate");
        }
    }
});
