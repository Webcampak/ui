//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtext');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtext', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationvideospreprocesscfgvideopreimgtext'

    , fieldLabel: i18n.gettext('Legend')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtext')
        }
    }
});
