/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpostprodtextmain"

    , title:  i18n.gettext("Insert a legend")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 150}
    , items: [
        {xtype: "sourcesconfigurationpostprodtextcfgvideopreimagemagicktxt"}
        , {xtype: "sourcesconfigurationpostprodtextcfgvideopreimgtext"}
        , {xtype: "sourcesconfigurationpostprodtextcfgvideopreimgdateformat"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationpostprodtextcfgvideopreimgtextsize", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationpostprodtextcfgvideopreimgtextgravity", flex: 1}
            ]
        }
        , {xtype : "sourcesconfigurationpostprodtextcfgvideopreimgtextfont"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationpostprodtextcfgvideopreimgtextoverposition", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationpostprodtextcfgvideopreimgtextovercolor", flex: 1}
            ]
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationpostprodtextcfgvideopreimgtextbaseposition", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationpostprodtextcfgvideopreimgtextbasecolor", flex: 1}
            ]
        }
    ]
});

