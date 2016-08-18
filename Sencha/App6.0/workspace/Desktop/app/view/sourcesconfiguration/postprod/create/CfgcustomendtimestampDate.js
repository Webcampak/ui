//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomendtimestampDate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomendtimestampDate', {
    extend: 'Ext.form.field.Date'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomendtimestampdate'

    , fieldLabel: i18n.gettext('To')
    , format: 'd/m/Y'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgcustomendtimestampDate')
        }
    }
});
