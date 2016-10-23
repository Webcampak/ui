/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.ftp.Cfgftphotlinkservermp4retry");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.ftp.Cfgftphotlinkservermp4retry", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationvideosftpcfgftphotlinkservermp4retry"

    , fieldLabel: i18n.gettext("Retries")
    , allowBlank: false
    , minValue: 0
    , maxValue: 4
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgftphotlinkservermp4retry");
        }
    }
});
