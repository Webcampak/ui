/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.archives.Cfgcapturedeleteafterdays");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.archives.Cfgcapturedeleteafterdays", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpicturesarchivescfgcapturedeleteafterdays"

    , fieldLabel: i18n.gettext("Delete pictures after (days, 0 = no limit)")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcapturedeleteafterdays")
        }
    }
});
