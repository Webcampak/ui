//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextbasecolor');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextbasecolor', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationpostprodtextcfgvideopreimgtextbasecolor'

    , fieldLabel: i18n.gettext('Shadow Color')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtextbasecolor')
        }
    }
});
