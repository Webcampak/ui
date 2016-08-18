//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextoverposition');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextoverposition', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationvideospreprocesscfgvideopreimgtextoverposition'

    , fieldLabel: i18n.gettext('Legend Coordinates')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtextoverposition')
        }
    }
});
