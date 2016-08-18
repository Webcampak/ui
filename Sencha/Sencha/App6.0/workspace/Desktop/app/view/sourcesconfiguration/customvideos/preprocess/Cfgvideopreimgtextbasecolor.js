//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextbasecolor');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextbasecolor', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbasecolor'

    , fieldLabel: i18n.gettext('Shadow Color')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtextbasecolor')
        }
    }
});
