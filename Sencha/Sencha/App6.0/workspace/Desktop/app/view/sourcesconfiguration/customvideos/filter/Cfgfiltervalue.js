//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.filter.Cfgfiltervalue');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.filter.Cfgfiltervalue', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationcustomvideosfiltercfgfiltervalue'

    , fieldLabel: i18n.gettext('Max distance')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgfiltervalue')
        }
    }
});
