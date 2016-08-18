//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkpositiony');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.watermark.Cfgpicwatermarkpositiony', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpictureswatermarkcfgpicwatermarkpositiony'

    , fieldLabel: i18n.gettext('Y')
    , minValue: 0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgpicwatermarkpositiony')
        }
    }
});

