/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgvidminintervalvalue");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgvidminintervalvalue", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodcreatecfgvidminintervalvalue"

    , fieldLabel: i18n.gettext("Minimum interval between two pictures:")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvidminintervalvalue");
        }
    }
});
