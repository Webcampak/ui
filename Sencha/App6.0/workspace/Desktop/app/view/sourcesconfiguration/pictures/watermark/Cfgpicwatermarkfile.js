//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkfile');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkfile", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationpictureswatermarkcfgpicwatermarkfile'

    , store: 'sourcesconfiguration.WatermarkFiles'
    , fieldLabel: i18n.gettext('Watermark File')
    , valueField: 'NAME'
    , displayField: 'NAME'
    , queryMode: 'local'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgpicwatermarkfile')
        }
    }
});