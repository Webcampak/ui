//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.watermark.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.watermark.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationpostprodwatermarkmain'

    , title: i18n.gettext('Insert Watermark')
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: 'sourcesconfigurationpostprodwatermarkcfgwatermarkactivate'}
        , {xtype: 'sourcesconfigurationpostprodwatermarkcfgwatermarkfile'}
        , {xtype: 'sourcesconfigurationpostprodwatermarkcfgwatermarkdissolve'}
        , {
            xtype: 'fieldcontainer',
            fieldLabel: i18n.gettext('Location of the watermark'),
            combineErrors: false,
            layout: {type:'hbox',	pack: 'start'},
            items: [
                    {html: 'X: ', xtype: 'label', width: 20, padding: 2 }
                    , {xtype : 'sourcesconfigurationpostprodwatermarkcfgwatermarkpositionx', width: 60}
                    , {html: 'Y: ', xtype: 'label', width: 20, padding: 2 }
                    , {xtype : 'sourcesconfigurationpostprodwatermarkcfgwatermarkpositiony', width: 60}
            ]
        }
    ]    
});

