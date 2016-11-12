/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.ftp.local.Cfglocalftppass");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.ftp.local.Cfglocalftppass", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationftplocalcfglocalftppass"

    , fieldLabel: i18n.gettext("Password")
    , padding: 5
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.ftp.Ftp.updateStoreValue", newValue, oldValue, "cfglocalftppass");
        }
    }
});
