/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpmainserverretry");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpmainserverretry", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpicturesftpcfgftpmainserverretry"

    , fieldLabel: i18n.gettext("Number of retries")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgftpmainserverretry");
        }
    }
});
