/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextsize");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextsize", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpicturestextcfgimgtextsize"

    , fieldLabel: i18n.gettext("Text size")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgimgtextsize");
        }
    }
});
