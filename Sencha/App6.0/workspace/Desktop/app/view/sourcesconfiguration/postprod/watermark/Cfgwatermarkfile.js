//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkfile');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkfile", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationpostprodwatermarkcfgwatermarkfile'

    , store: 'sourcesconfiguration.WatermarkFiles'
    , fieldLabel: i18n.gettext('Watermark File')
    , valueField: 'NAME'
    , displayField: 'NAME'
    , queryMode: 'local'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgwatermarkfile')
        }
    }
});