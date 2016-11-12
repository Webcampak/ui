/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfgnetif");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfgnetif", {
    extend: "Ext.form.field.Text"
    , alias: "widget.systemconfigurationgeneralcfgnetif"

    , fieldLabel: i18n.gettext("Main network interface")
    , labelWidth: 200
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue", newValue, oldValue, "cfgnetif");
        }
    }
});
