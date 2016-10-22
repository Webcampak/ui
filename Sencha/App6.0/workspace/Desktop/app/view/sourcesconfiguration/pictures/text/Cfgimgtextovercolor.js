/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextovercolor");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextovercolor", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpicturestextcfgimgtextovercolor"

    , fieldLabel: i18n.gettext("Legend Color")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgimgtextovercolor")
        }
    }
});


