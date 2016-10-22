/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.graphs.Cfgftpphidgetserverretry");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.graphs.Cfgftpphidgetserverretry", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationphidgetsgraphscfgftpphidgetserverretry"

    , fieldLabel: i18n.gettext("Number of retries")
    , allowBlank: false
    , minValue: 0
    , maxValue: 4
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue", newValue, oldValue, "cfgftpphidgetserverretry")
        }
    }
});
