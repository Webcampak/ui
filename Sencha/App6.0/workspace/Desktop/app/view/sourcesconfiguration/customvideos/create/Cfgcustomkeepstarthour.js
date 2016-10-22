/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomkeepstarthour");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomkeepstarthour", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcustomvideoscreatecfgcustomkeepstarthour"

    , fieldLabel: i18n.gettext("Only keep pictures between")
    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgcustomkeepstarthour")
        }
    }
});
