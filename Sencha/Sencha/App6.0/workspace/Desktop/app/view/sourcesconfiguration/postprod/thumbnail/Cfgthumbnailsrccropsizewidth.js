//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropsizewidth');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropsizewidth', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizewidth'

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgthumbnailsrccropsizewidth')
        }
    }
});
