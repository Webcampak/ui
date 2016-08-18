//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Cfgvidmininterval');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Cfgvidmininterval", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationpostprodcreatecfgvidmininterval'

    , valueField: 'value'
    , displayField: 'name'
    , queryMode: 'local'
    , store:
        Ext.create('Ext.data.Store', {
            fields : ['name', 'value']
            , data   : [
                {name : i18n.gettext('Minutes'),    value: 'minutes'}
                , {name : i18n.gettext('Seconds'),  value: 'seconds'}
            ]
        })
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue', newValue, oldValue, 'cfgvidmininterval')
        }
    }
});