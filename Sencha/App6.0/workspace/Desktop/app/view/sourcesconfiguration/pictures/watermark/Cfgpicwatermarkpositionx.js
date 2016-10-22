/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkpositionx");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkpositionx", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpictureswatermarkcfgpicwatermarkpositionx"

    , fieldLabel: i18n.gettext("X")
    , minValue: 0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgpicwatermarkpositionx");
        }
    }
});

