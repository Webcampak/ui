/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropypos");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropypos", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpicturescropcfgcropypos"

    , fieldLabel: i18n.gettext("Y")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcropypos")
        }
    }
});
