/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropsizeheight");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropsizeheight", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizeheight"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgthumbnailsrccropsizeheight");
        }
    }
});
