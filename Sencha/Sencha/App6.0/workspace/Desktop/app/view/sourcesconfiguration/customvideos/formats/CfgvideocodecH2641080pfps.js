//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH2641080pfps');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.formats.CfgvideocodecH2641080pfps', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pfps'

    , fieldLabel: i18n.gettext('FPS')
    , allowBlank: false
    , minValue: 1
    , maxValue: 100
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideocodecH2641080pfps')
        }
    }
});
