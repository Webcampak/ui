/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgmovefilestosource");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgmovefilestosource", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationpostprodcreatecfgmovefilestosource"

    , fieldLabel: i18n.gettext("Move pictures to:")
    , store: "shared.Sources"
    , valueField: "ID"
    , displayField: "NAME"
    , queryMode: "local"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgmovefilestosource");
        }
    }
});