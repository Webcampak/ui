//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.postprod.rotate.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.postprod.rotate.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationpostprodrotatemain'

    , title: i18n.gettext('Rotate picture')
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: 'sourcesconfigurationpostprodrotatecfgrotateactivate'}
        , {xtype: 'sourcesconfigurationpostprodrotatecfgrotateangle'}
    ]
});

