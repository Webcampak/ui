//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomstarttimestampDate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.CfgcustomstarttimestampDate', {
    extend: 'Ext.form.field.Date'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomstarttimestampdate'

    , format: 'd/m/Y'
    , fieldLabel: i18n.gettext('From')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgcustomstarttimestampDate')
        }
    }
});
