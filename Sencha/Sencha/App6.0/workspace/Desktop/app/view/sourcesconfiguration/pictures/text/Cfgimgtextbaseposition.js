//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextbaseposition');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextbaseposition', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationpicturestextcfgimgtextbaseposition'

    , fieldLabel: i18n.gettext('Shadow Coordinates')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgimgtextbaseposition')
        }
    }
});
