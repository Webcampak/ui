/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkpositiony");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkpositiony", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationvideoswatermarkcfgwatermarkpositiony"

    , fieldLabel: i18n.gettext("Y")
    , minValue: 0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgwatermarkpositiony");
        }
    }
});

