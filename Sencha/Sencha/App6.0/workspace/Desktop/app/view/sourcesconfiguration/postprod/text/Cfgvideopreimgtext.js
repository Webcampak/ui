//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtext');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtext', {
    extend: 'Ext.form.field.Text'
    , alias: 'widget.sourcesconfigurationpostprodtextcfgvideopreimgtext'

    , fieldLabel: i18n.gettext('Legend')
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgvideopreimgtext')
        }
    }
});
