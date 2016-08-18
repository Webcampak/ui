//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgvidminintervalvalue');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.create.Cfgvidminintervalvalue', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationcustomvideoscreatecfgvidminintervalvalue'

    , fieldLabel: i18n.gettext('Minimum interval between two pictures:')
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgvidminintervalvalue')
        }
    }
});
