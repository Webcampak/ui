/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextoverposition");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextoverposition", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpicturestextcfgimgtextoverposition"

    , fieldLabel: i18n.gettext("Legend Coordinates")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgimgtextoverposition");
        }
    }
});
