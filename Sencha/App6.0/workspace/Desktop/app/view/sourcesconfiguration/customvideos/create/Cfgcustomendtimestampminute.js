//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomendminute');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomendminute', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcustomvideoscreatecfgcustomendminute'

    , allowBlank: false
    , minValue:0
    , maxValue:59
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgcustomendminute')
        }
    }
});
