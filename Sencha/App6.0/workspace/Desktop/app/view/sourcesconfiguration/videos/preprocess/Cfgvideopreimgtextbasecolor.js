//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextbasecolor');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextbasecolor', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationvideospreprocesscfgvideopreimgtextbasecolor'

    , fieldLabel: i18n.gettext('Shadow Color')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtextbasecolor')
        }
    }
});
