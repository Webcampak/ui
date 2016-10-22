/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextfont");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextfont", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationpostprodtextcfgvideopreimgtextfont"

    , store: "sourcesconfiguration.Fonts"
    , fieldLabel: i18n.gettext("Text font")
    , valueField: "NAME"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextfont");
        }
    }
});