/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.transition.Cfgtransitioncropsizewidth");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.transition.Cfgtransitioncropsizewidth", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodtransitioncfgtransitioncropsizewidth"

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgtransitioncropsizewidth");
        }
    }
});
