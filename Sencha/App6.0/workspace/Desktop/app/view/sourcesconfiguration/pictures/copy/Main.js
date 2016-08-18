//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.copy.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.copy.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationpicturescopymain'

    , title: i18n.gettext('Copy pictures internally')
    , collapsible: false

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 200}
    , items   : [{
        xtype: 'container'
        , defaults: {padding: 2}
        , layout: {type:'hbox', align: 'stretch', pack: 'start'}
        , items   : [
            {flex: 1,   xtype: 'sourcesconfigurationpicturescopycfgcopymainsourceid'                   }
            , {width: 55, labelWidth: 35, xtype: 'sourcesconfigurationpicturescopycfgcopymainsourceraw'}
            , {width: 60, labelWidth: 40, xtype: 'sourcesconfigurationpicturescopycfgcopymainenable'   }
        ]
    },	{
        xtype: 'container'
        , defaults: {padding: 2}
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {flex: 1,   xtype: 'sourcesconfigurationpicturescopycfgcopysecondsourceid'                      }
            , {width: 55, labelWidth: 35, xtype: 'sourcesconfigurationpicturescopycfgcopysecondsourceraw'   }
            , {width: 60, labelWidth: 40, xtype: 'sourcesconfigurationpicturescopycfgcopysecondenable'      }
        ]
    }]
});

