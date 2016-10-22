/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextbaseposition");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextbaseposition", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationvideospreprocesscfgvideopreimgtextbaseposition"

    , fieldLabel: i18n.gettext("Shadow Coordinates")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextbaseposition");
        }
    }
});
