//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropsizewidth');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropsizewidth', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpicturescropcfgcropsizewidth'

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgcropsizewidth')
        }
    }
});
