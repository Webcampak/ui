/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.preprocess.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.preprocess.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationvideospreprocessmain"

    , title:  i18n.gettext("Pre-processing manipulations (advanced)")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 150}
    , items: [
        {xtype: "sourcesconfigurationvideospreprocesscfgvideopreimagemagicktxt"}
        , {xtype: "sourcesconfigurationvideospreprocesscfgvideopreimgtext"}
        , {xtype: "sourcesconfigurationvideospreprocesscfgvideopreimgdateformat"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationvideospreprocesscfgvideopreimgtextsize", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationvideospreprocesscfgvideopreimgtextgravity", flex: 1}
            ]
        }
        , {xtype : "sourcesconfigurationvideospreprocesscfgvideopreimgtextfont"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationvideospreprocesscfgvideopreimgtextoverposition", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationvideospreprocesscfgvideopreimgtextovercolor", flex: 1}
            ]
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationvideospreprocesscfgvideopreimgtextbaseposition", flex: 1}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationvideospreprocesscfgvideopreimgtextbasecolor", flex: 1}
            ]
        }
        , {
            xtype: "fieldcontainer"
            , width: 500
            , labelWidth: 400
            , fieldLabel: i18n.gettext("Resize picture before video creation")
            , labelSeparator: ""
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : "sourcesconfigurationvideospreprocesscfgvideopreresize"}
                , {xtype: "container", width: 10}
                , {xtype: "sourcesconfigurationvideospreprocesscfgvideopreresizeres", labelWidth: 100}
                , {xtype: "container", width: 10}
                , {
                    xtype: "fieldcontainer"
                    , width: 200
                    , labelWidth: 200
                    , fieldLabel: i18n.gettext("For example: 1920x1080")
                    , labelSeparator: ""
                }
            ]
        }
    ]
});

