//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.source.Cfgcroncapturevalue');
//</debug>
Ext.define('WPAKT.view.config.capture.source.Cfgcroncapturevalue', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.configcapturesourcecfgcroncapturevalue'

    , fieldLabel: i18n.gettext('Capture every')
    , minValue: 0
    , allowBlank: false

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKT.controller.config.Config.updateStoreValue', newValue, oldValue, 'cfgcroncapturevalue')
        }
    }
});

