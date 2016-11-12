/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.filter.Cfgfiltervalue");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.filter.Cfgfiltervalue", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpostprodfiltercfgfiltervalue"

    , fieldLabel: i18n.gettext("Max distance")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgfiltervalue");
        }
    }
});
