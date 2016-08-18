//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkfile');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkfile", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationcustomvideoswatermarkcfgwatermarkfile'

    , store: 'sourcesconfiguration.WatermarkFiles'
    , fieldLabel: i18n.gettext('Watermark File')
    , valueField: 'NAME'
    , displayField: 'NAME'
    , queryMode: 'local'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgwatermarkfile')
        }
    }
});