/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.ftp.Cfgftphotlinkserveraviid");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.ftp.Cfgftphotlinkserveraviid", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationvideosftpcfgftphotlinkserveraviid"

    , fieldLabel: i18n.gettext("Send hotlink AVI files to")
    , store: "sourcesconfiguration.FTPServers"
    , valueField: "ID"
    , displayField: "NAME"
    , queryMode: "local"
    , allowBlank: true
    , emptyText: i18n.gettext("Disabled")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            // By Default, Sencha seems to generate a Model ID even when value is blank
            // We loop through the store to find the ID corresponding to newValue
            // If the ID does not exist, newValue becomes blank
            var idFound = false;
            scope.getStore().each(function (rec) {
                if (rec.get("ID") === newValue ) {idFound = true;}
            });
            if (idFound === false) {newValue = "";}
            //console.log(scope.getStore()); console.log(scope);console.log(newValue);console.log(oldValue);
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgftphotlinkserveraviid");
        }
    }
});