/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreresizeres");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreresizeres", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationcustomvideospreprocesscfgvideopreresizeres"

    , fieldLabel: i18n.gettext("Picture size (1920x1080)")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreresizeres");
        }
    }
});
