/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH264480pfps");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH264480pfps", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcustomvideosformatscfgvideocodecH264480pfps"

    , fieldLabel: i18n.gettext("FPS")
    , allowBlank: false
    , minValue: 1
    , maxValue: 100
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH264480pfps");
        }
    }
});
