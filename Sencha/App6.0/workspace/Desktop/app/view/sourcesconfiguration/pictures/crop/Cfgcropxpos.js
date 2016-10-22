/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropxpos");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropxpos", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpicturescropcfgcropxpos"

    , fieldLabel: i18n.gettext("X")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcropxpos");
        }
    }
});
