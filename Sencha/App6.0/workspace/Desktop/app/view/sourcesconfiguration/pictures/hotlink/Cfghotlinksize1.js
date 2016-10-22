/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinksize1");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinksize1", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpictureshotlinkcfghotlinksize1"

    , fieldLabel: i18n.gettext("Hotlink 1 size")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfghotlinksize1");
        }
    }
});
