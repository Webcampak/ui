//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomendtimestampMinute');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomendtimestampMinute', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomendtimestampminute'

    , allowBlank: false
    , minValue:0
    , maxValue:59
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgcustomendtimestampMinute')
        }
    }
});
