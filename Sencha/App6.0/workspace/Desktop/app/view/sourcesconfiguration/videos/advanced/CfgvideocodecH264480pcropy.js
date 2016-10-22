/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264480pcropy");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264480pcropy", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropy"

    , minValue: 0
    , maxValue: 10000
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH264480pcropy");
        }
    }
});
