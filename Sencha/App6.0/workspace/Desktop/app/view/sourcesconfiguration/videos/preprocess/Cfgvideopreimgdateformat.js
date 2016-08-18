//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgdateformat');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.preprocess.Cfgvideopreimgdateformat', {
    extend: 'Ext.form.field.ComboBox'
    , alias: 'widget.sourcesconfigurationvideospreprocesscfgvideopreimgdateformat'

    , fieldLabel: i18n.gettext('Date format')
    , mode: 'local'
    , value: '0'
    , triggerAction: 'all'
    , queryMode: 'local'
    , forceSelection: true
    , editable: false
    , displayField: 'name'
    , valueField: 'value'
    , store: Ext.create('Ext.data.Store', {
        fields : ['name', 'value']
        , data   : [
            {name : i18n.gettext('Do not insert date'),                   value: '0'}
            , {name : i18n.gettext('25/01/2010 - 21h30'),                 value: '1'}
            , {name : i18n.gettext('25/01/2010'),                         value: '2'}
            , {name : i18n.gettext('09h30'),                              value: '3'}
            , {name : i18n.gettext('Thursday 25 January 2010 - 21h30'),   value: '4'}
            , {name : i18n.gettext('25 January 2010 - 21h30'),            value: '5'}
            , {name : i18n.gettext('01/25/2010 - 09h30 PM'),              value: '6'}
            , {name : i18n.gettext('01/25/2010 - 21h30'),                 value: '7'}
        ]
    })
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideopreimgdateformat')
        }
    }
});

