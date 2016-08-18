//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomstarttimestampDate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomstarttimestampDate', {
    extend: 'Ext.form.field.Date'
    , alias: 'widget.sourcesconfigurationcustomvideoscreatecfgcustomstarttimestampdate'

    , format: 'd/m/Y'
    , fieldLabel: i18n.gettext('From')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgcustomstarttimestampDate')
        }
    }
});
