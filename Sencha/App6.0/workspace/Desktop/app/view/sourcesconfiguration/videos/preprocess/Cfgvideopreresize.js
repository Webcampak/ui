/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreresize");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreresize", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationvideospreprocesscfgvideopreresize"

    , fieldLabel: i18n.gettext("Enable")
    , uncheckedValue: "off"
    , inputValue: "on"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreresize");
        }
    }
});

