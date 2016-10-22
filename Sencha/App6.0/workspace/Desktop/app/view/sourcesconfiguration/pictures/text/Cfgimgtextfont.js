/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextfont");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextfont", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationpicturestextcfgimgtextfont"

    , store: "sourcesconfiguration.Fonts"
    , fieldLabel: i18n.gettext("Text font")
    , valueField: "NAME"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgimgtextfont");
        }
    }
});