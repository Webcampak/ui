//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomendminute');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomendminute', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomendminute'

    , allowBlank: false
    , minValue:0
    , maxValue:59
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.Videos.updateStoreValue', newValue, oldValue, 'cfgcustomendminute')
        }
    }
});
