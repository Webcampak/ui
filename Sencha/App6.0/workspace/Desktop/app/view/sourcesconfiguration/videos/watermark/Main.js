/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.watermark.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.watermark.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationvideoswatermarkmain"

    , title: i18n.gettext("Insert Watermark")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: "sourcesconfigurationvideoswatermarkcfgwatermarkactivate"}
        , {xtype: "sourcesconfigurationvideoswatermarkcfgwatermarkfile"}
        , {xtype: "sourcesconfigurationvideoswatermarkcfgwatermarkdissolve"}
        , {
            xtype: "fieldcontainer"
            , fieldLabel: i18n.gettext("Location of the watermark")
            , combineErrors: false
            , defaults: {padding: 2}
            , layout: {type:"hbox", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationvideoswatermarkcfgwatermarkpositionx", width: 100, labelWidth: 10}
                , {xtype : "sourcesconfigurationvideoswatermarkcfgwatermarkpositiony", width: 100, labelWidth: 10}
            ]
        }
    ]
});

