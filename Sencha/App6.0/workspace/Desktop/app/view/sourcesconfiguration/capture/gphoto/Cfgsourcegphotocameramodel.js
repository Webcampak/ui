//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotocameramodel');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotocameramodel', {
    extend: 'Ext.form.field.ComboBox'
    , alias: 'widget.sourcesconfigurationcapturegphotocfgsourcegphotocameramodel'

    , fieldLabel: i18n.gettext('Camera Model')
    , store: 'shared.CameraModels'

    , valueField: 'NAME'
    , displayField: 'NAME'
    , queryMode: 'local'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue', newValue, oldValue, 'cfgsourcegphotocameramodel')
        }
    }
});
