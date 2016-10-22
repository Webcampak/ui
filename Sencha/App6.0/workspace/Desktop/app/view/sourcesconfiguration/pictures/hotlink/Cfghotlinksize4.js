/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinksize4");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinksize4", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpictureshotlinkcfghotlinksize4"

    , fieldLabel: i18n.gettext("Hotlink 4 size")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfghotlinksize4")
        }
    }
});
