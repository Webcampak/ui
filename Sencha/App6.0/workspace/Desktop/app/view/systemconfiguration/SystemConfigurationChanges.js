/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.SystemConfigurationChanges");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.SystemConfigurationChanges", {
    extend: "Ext.toolbar.TextItem"
    , alias : "widget.systemconfigurationsystemconfigurationchanges"

    , text: i18n.gettext("No configuration changes")
    , disabled: true
});