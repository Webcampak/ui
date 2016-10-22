/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomkeepstarthour");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomkeepstarthour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcreatecfgcustomkeepstarthour"

    , fieldLabel: i18n.gettext("Only keep pictures between")
    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgcustomkeepstarthour");
        }
    }
});
