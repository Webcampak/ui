//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.crop.Cfgpostprodsizewidth');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.crop.Cfgcropsizewidth', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpostprodcropcfgcropsizewidth'

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgcropsizewidth')
        }
    }
});
