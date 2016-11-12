/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.transition.Cfgtransitioncropxpos");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.transition.Cfgtransitioncropxpos", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodtransitioncfgtransitioncropxpos"

    , fieldLabel: i18n.gettext("X")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgtransitioncropxpos");
        }
    }
});
