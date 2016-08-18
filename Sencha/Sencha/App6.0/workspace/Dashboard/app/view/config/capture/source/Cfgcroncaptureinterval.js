//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.source.Cfgcroncaptureinterval');
//</debug>
Ext.define('WPAKT.view.config.capture.source.Cfgcroncaptureinterval', {
    extend: 'Ext.form.field.ComboBox'
    , alias: 'widget.configcapturesourcecfgcroncaptureinterval'

    , mode: 'local'
    , value: 'minutes'
    , triggerAction: 'all'
    , forceSelection: true
    , editable: false
    , displayField: 'name'
    , valueField: 'value'
    , queryMode: 'local'
    , store:
        Ext.create('Ext.data.Store', {
            fields : ['name', 'value']
            , data   : [
                {name : i18n.gettext('Minutes'),   value: 'minutes'}
                , {name : i18n.gettext('Seconds'),  value: 'seconds'}
            ]
        })
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKT.controller.config.Config.updateStoreValue', newValue, oldValue, 'cfgcroncaptureinterval')
        }
    }
});

