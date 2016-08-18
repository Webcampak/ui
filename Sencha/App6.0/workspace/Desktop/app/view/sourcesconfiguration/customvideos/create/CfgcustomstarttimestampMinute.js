//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomstarttimestampMinute');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomstarttimestampMinute', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcustomvideoscreatecfgcustomstarttimestampminute'

    , allowBlank: false
    , minValue:0
    , maxValue:59
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgcustomstarttimestampMinute')
        }
    }
});
