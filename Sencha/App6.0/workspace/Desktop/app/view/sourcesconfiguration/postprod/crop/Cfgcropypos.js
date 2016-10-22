/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.crop.Cfgpostprodypos");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.crop.Cfgcropypos", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcropcfgcropypos"

    , fieldLabel: i18n.gettext("Y")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgcropypos");
        }
    }
});
