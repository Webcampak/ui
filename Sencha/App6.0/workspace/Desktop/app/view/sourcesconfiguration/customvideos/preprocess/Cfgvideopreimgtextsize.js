//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextsize');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextsize', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextsize'

    , fieldLabel: i18n.gettext('Text size')

    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtextsize')
        }
    }
});
