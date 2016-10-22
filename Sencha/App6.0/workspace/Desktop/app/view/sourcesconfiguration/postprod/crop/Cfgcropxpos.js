/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.crop.Cfgpostprodxpos");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.crop.Cfgcropxpos", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcropcfgcropxpos"

    , fieldLabel: i18n.gettext("X")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgcropxpos");
        }
    }
});
