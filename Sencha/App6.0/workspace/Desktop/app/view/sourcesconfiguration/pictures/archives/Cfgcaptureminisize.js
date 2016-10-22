/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.archives.Cfgcaptureminisize");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.archives.Cfgcaptureminisize", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpicturesarchivescfgcaptureminisize"

    , fieldLabel: i18n.gettext("Minimum single picture size")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcaptureminisize");
        }
    }
});
