/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreresizeres");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreresizeres", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationvideospreprocesscfgvideopreresizeres"

    , fieldLabel: i18n.gettext("Picture size")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreresizeres");
        }
    }
});
