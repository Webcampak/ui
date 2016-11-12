/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264customcropwidth");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264customcropwidth", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationvideosadvancedcfgvideocodecH264customcropwidth"

    , minValue: 0
    , maxValue: 10000
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH264customcropwidth");
        }
    }
});
