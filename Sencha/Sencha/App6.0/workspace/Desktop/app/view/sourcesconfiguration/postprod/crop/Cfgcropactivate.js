//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.crop.Cfgpostprodactivate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.crop.Cfgcropactivate', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationpostprodcropcfgcropactivate'

    , fieldLabel: i18n.gettext('Crop pictures')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgcropactivate');
        }
    }
});

