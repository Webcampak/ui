//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomstarttimestampHour');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomstarttimestampHour', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcustomvideoscreatecfgcustomstarttimestamphour'

    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgcustomstarttimestampHour')
        }
    }
});
