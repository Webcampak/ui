//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.filter.Cfgfilterwatermarkfile');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.filter.Cfgfilterwatermarkfile", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationcustomvideosfiltercfgfilterwatermarkfile'

    , store: 'shared.PhidgetsPorts'
    , fieldLabel: i18n.gettext('Watermark File')
    , valueField: 'ID'
    , displayField: 'NAME'
    , queryMode: 'local'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgfilterwatermarkfile')
        }
    }
});