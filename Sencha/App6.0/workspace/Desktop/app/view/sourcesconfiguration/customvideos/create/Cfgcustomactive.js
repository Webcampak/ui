//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomactive');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomactive", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.sourcesconfigurationcustomvideoscreatecfgcustomactive'

    , fieldLabel: i18n.gettext('Start creation')
    , valueField: 'value'
    , displayField: 'name'
    , queryMode: 'local'
    , store:
        Ext.create('Ext.data.Store', {
            fields : ['name', 'value']
            , data   : [
                {name : i18n.gettext('Disabled'),               value: 'no'    }
                , {name : i18n.gettext('As Soon As Possible'),  value: 'planon' }
                , {name : i18n.gettext('At 4:00 am'),           value: 'plan04' }
            ]
        })
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue', newValue, oldValue, 'cfgcustomactive')
        }
    }
});