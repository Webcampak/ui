//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomendtimestampHour');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomendtimestampHour', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomendhour'

    , allowBlank: false
    , minValue:0
    , maxValue:23
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgcustomendtimestampHour')
        }
    }
});
