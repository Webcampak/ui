/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomvidname");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomvidname", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpostprodcreatecfgcustomvidname"

    , fieldLabel: i18n.gettext("Filename")
    , vtype: "alphanum"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgcustomvidname");
        }
    }
});
