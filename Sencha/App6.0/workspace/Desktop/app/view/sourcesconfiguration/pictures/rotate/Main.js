/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.rotate.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.rotate.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpicturesrotatemain"

    , title: i18n.gettext("Rotate picture")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 150}
    , items: [
        {xtype: "sourcesconfigurationpicturesrotatecfgrotateactivate"}
        , {xtype: "sourcesconfigurationpicturesrotatecfgrotateangle"}
    ]
});

