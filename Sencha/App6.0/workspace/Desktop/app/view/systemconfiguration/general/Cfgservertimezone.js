/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfgservertimezone");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfgservertimezone", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.systemconfigurationgeneralcfgservertimezone"

    , fieldLabel: i18n.gettext("Timezone")
    , labelWidth: 200
    , store: "shared.Timezones"

    , valueField: "NAME"
    , displayField: "NAME"
    , queryMode: "local"

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue", newValue, oldValue, "cfgservertimezone");
        }
    }
});

