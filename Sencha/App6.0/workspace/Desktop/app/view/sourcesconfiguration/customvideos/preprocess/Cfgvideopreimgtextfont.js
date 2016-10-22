/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextfont");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextfont", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextfont"

    , store: "sourcesconfiguration.Fonts"
    , fieldLabel: i18n.gettext("Text font")
    , valueField: "NAME"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextfont");
        }
    }
});