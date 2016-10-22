/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextsize");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextsize", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationvideospreprocesscfgvideopreimgtextsize"

    , fieldLabel: i18n.gettext("Text size")

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextsize");
        }
    }
});
