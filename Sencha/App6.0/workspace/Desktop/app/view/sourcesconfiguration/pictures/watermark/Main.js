/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.watermark.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.watermark.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpictureswatermarkmain"

    , title: i18n.gettext("Insert Watermark")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 160}
    , items: [
        {xtype: "sourcesconfigurationpictureswatermarkcfgpicwatermarkactivate"}
        , {xtype: "sourcesconfigurationpictureswatermarkcfgpicwatermarkfile"}
        , {xtype: "sourcesconfigurationpictureswatermarkcfgpicwatermarkdissolve"}
        , {
            xtype: "fieldcontainer"
            , fieldLabel: i18n.gettext("Location of the watermark")
            , combineErrors: false
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpictureswatermarkcfgpicwatermarkpositionx",   labelWidth: 15, width: 100}
                , {xtype : "sourcesconfigurationpictureswatermarkcfgpicwatermarkpositiony", labelWidth: 15, width: 100}
            ]
        }
    ]
});

