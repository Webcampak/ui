//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.filter.Cfgfilterwatermarkfile');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.filter.Cfgfilterwatermarkfile", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationpostprodfiltercfgfilterwatermarkfile'

    , store: 'shared.PhidgetsPorts'
    , fieldLabel: i18n.gettext('Watermark File')
    , valueField: 'ID'
    , displayField: 'NAME'
    , queryMode: 'local'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgfilterwatermarkfile')
        }
    }
});