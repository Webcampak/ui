/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.watermark.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.watermark.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcustomvideoswatermarkmain"

    , title: i18n.gettext("Insert Watermark")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkactivate"}
        , {xtype: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkfile"}
        , {xtype: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkdissolve"}
        , {
            xtype: "fieldcontainer",
            fieldLabel: i18n.gettext("Location of the watermark"),
            combineErrors: false,
            layout: {type:"hbox",	pack: "start"},
            items: [
                    {html: "X: ", xtype: "label", width: 20, padding: 2 }
                    , {xtype : "sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositionx", width: 60}
                    , {html: "Y: ", xtype: "label", width: 20, padding: 2 }
                    , {xtype : "sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositiony", width: 60}
            ]
        }
    ]
});

