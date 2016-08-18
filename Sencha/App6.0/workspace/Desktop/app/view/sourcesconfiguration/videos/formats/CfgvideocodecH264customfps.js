//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264customfps');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264customfps', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationvideosformatscfgvideocodecH264customfps'

    , fieldLabel: i18n.gettext('FPS')
    , allowBlank: false
    , minValue: 1
    , maxValue: 100
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideocodecH264customfps')
        }
    }
});
