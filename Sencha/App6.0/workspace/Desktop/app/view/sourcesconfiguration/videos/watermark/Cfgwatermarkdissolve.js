//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkdissolve');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.watermark.Cfgwatermarkdissolve', {
    extend: 'Ext.form.SliderField'
    , alias: 'widget.sourcesconfigurationvideoswatermarkcfgwatermarkdissolve'

    , fieldLabel: i18n.gettext('Transparency')
    , minValue: 0
    , maxValue: 100
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgwatermarkdissolve')
        }
    }
});

