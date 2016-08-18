//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264customwidth');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.advanced.CfgvideocodecH264customwidth', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationvideosadvancedcfgvideocodecH264customwidth'

    , minValue: 0
    , maxValue: 10000
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideocodecH264customwidth')
        }
    }
});
