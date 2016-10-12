//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomenddate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomenddate', {
    extend: 'Ext.form.field.Date'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomenddate'

    , format: 'd/m/Y'
    , fieldLabel: i18n.gettext('To')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (scope.isValid() && oldValue !== null) {
                this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.Videos.updateDate', newValue, oldValue, 'end');
            }
        }
    }
});
