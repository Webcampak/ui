/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfgxfermaxfilesperthread");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfgxfermaxfilesperthread", {
    extend: "Ext.form.field.Number"
    , alias: "widget.systemconfigurationgeneralcfgxfermaxfilesperthread"

    , fieldLabel: i18n.gettext("Maximum number of files in each Xfer thread")
    , labelWidth: 200
    , minValue: 0
    , allowBlank: false    
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue", newValue, oldValue, "cfgxfermaxfilesperthread");
        }
    }
});
