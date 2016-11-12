/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH264customcreateflv");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH264customcreateflv", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcustomvideosformatscfgvideocodecH264customcreateflv"

    , fieldLabel: i18n.gettext("Web (MP4)")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH264customcreateflv");
        }
    }
});

