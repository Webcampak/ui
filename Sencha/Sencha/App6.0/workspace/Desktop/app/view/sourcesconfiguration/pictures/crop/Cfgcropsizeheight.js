//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropsizeheight');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropsizeheight', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpicturescropcfgcropsizeheight'

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgcropsizeheight')
        }
    }
});
