/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pcropy");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pcropy", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropy"

    , minValue: 0
    , maxValue: 10000
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideocodecH2641080pcropy");
        }
    }
});
