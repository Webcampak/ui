//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextbasecolor');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.text.Cfgimgtextbasecolor', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationpicturestextcfgimgtextbasecolor'

    , fieldLabel: i18n.gettext('Shadow Color')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgimgtextbasecolor')
        }
    }
});
