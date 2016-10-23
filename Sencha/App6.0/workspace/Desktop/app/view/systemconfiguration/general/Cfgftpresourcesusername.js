/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfgftpresourcesusername");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfgftpresourcesusername", {
    extend: "Ext.form.field.Text"
    , alias: "widget.systemconfigurationgeneralcfgftpresourcesusername"

    , fieldLabel: i18n.gettext("Username")
    , labelWidth: 200
    , readOnlyCls: "x-item-disabled"
    , readOnly: true
});
