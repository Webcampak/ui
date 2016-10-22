/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpsecondserverretry");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpsecondserverretry", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpicturesftpcfgftpsecondserverretry"

    , fieldLabel: i18n.gettext("Number of retries")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgftpsecondserverretry");
        }
    }
});
