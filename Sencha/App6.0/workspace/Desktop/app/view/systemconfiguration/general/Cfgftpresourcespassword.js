/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfgftpresourcespassword");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfgftpresourcespassword", {
    extend: "Ext.form.field.Text"
    , alias: "widget.systemconfigurationgeneralcfgftpresourcespassword"

    , fieldLabel: i18n.gettext("Password")
    , labelWidth: 200
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue", newValue, oldValue, "cfgftpresourcespassword");
        }
    }
});
