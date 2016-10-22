/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextfont");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextfont", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationvideospreprocesscfgvideopreimgtextfont"

    , store: "sourcesconfiguration.Fonts"
    , fieldLabel: i18n.gettext("Text font")
    , valueField: "NAME"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextfont");
        }
    }
});