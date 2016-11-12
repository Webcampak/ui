/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropsizewidth");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropsizewidth", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizewidth"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgthumbnaildstsizewidth");
        }
    }
});
