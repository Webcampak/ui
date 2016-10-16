//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropxpos');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropxpos', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropxpos'

    , fieldLabel: i18n.gettext('X')
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgthumbnaildstxpos')
        }
    }
});
