/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinksize3");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinksize3", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpictureshotlinkcfghotlinksize3"

    , fieldLabel: i18n.gettext("Hotlink 3 size")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfghotlinksize3");
        }
    }
});
