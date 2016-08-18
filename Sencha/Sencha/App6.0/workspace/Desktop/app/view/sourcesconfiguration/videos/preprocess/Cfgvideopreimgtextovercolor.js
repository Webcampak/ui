//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextovercolor');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextovercolor', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationvideospreprocesscfgvideopreimgtextovercolor'

    , fieldLabel: i18n.gettext('Legend Color')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtextovercolor')
        }
    }
});
