//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomstartdate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.create.Cfgcustomstartdate', {
    extend: 'Ext.form.field.Date'
    , alias: 'widget.sourcesconfigurationpostprodcreatecfgcustomstartdate'

    , format: 'd/m/Y'
    , fieldLabel: i18n.gettext('From')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (scope.isValid() && oldValue !== null) {
                this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.Videos.updateDate', newValue, oldValue, 'start');
            }
        }
    }
});
