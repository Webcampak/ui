//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomendtimestampDate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.create.CfgcustomendtimestampDate', {
    extend: 'Ext.form.field.Date'
    , alias: 'widget.sourcesconfigurationcustomvideoscreatecfgcustomendtimestampdate'

    , format: 'd/m/Y'
    , fieldLabel: i18n.gettext('To')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgcustomendtimestampDate')
        }
    }
});
