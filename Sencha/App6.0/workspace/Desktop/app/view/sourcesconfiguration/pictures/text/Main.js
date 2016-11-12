/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.text.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.text.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpicturestextmain"

    , title:  i18n.gettext("Insert Text")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 150}
    , items: [
        {xtype: "sourcesconfigurationpicturestextcfgimagemagicktxt"}
        , {xtype: "sourcesconfigurationpicturestextcfgimgtext"}
        , {xtype: "sourcesconfigurationpicturestextcfgimgdateformat"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationpicturestextcfgimgtextsize", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationpicturestextcfgimgtextgravity", flex: 1}
            ]
        }
        , {xtype : "sourcesconfigurationpicturestextcfgimgtextfont"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationpicturestextcfgimgtextoverposition", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationpicturestextcfgimgtextovercolor", flex: 1}
            ]
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationpicturestextcfgimgtextbaseposition", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationpicturestextcfgimgtextbasecolor", flex: 1}
            ]
        }
    ]
});

