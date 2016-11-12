/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextsize");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextsize", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodtextcfgvideopreimgtextsize"

    , fieldLabel: i18n.gettext("Text size")

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextsize");
        }
    }
});
