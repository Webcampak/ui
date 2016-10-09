//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomstarttimestampMinute');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomstarttimestampMinute', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomstartminute'

    , allowBlank: false
    , minValue:0
    , maxValue:59
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgcustomstarttimestampMinute')
        }
    }
});
