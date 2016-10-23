/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropypos");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropypos", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropypos"

    , fieldLabel: i18n.gettext("Y")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgthumbnaildstypos");
        }
    }
});
