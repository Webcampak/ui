/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264720pcropy");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264720pcropy", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropy"

    , minValue: 0
    , maxValue: 10000
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH264720pcropy");
        }
    }
});
