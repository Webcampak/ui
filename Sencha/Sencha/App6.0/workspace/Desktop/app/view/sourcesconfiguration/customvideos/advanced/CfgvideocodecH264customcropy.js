//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customcropy');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customcropy', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropy'

    , minValue: 0
    , maxValue: 10000
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideocodecH264customcropy')
        }
    }
});
