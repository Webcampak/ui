//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.archives.Cfgcapturemaxdirsize');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.archives.Cfgcapturemaxdirsize', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpicturesarchivescfgcapturemaxdirsize'

    , fieldLabel: i18n.gettext('Maximum archive size (Mbytes, 0 = no limit)')
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgcapturemaxdirsize')
        }
    }
});
