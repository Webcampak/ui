/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.thumbnail.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.thumbnail.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpostprodthumbnailmain"

    , title: i18n.gettext("Thumbnail")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: "sourcesconfigurationpostprodthumbnailcfgthumbnailactivate"}
        , {xtype: "sourcesconfigurationpostprodthumbnailcfgthumbnailborder"}
        , {
            xtype: "fieldcontainer"
            , width: 500
            , labelWidth: 400
            , fieldLabel: i18n.gettext("Thumbnail captured from Source Picture")
            , labelSeparator: ""
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [{
                xtype: "fieldcontainer"
                , fieldLabel: i18n.gettext("Size of the area")
                , combineErrors: false
                , layout: {type:"hbox", pack: "start"}
                , items: [
                    {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizewidth", width: 80}
                    , {html: "x", xtype: "label", width: 10, padding: 2 }
                    , {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizeheight", width: 80}
                ]
            }, {
                xtype: "container"
                , width: 10
            }, {
                xtype: "fieldcontainer"
                , flex: 1
                , fieldLabel: i18n.gettext("Location")
                , labelWidth: 70
                , defaults: {labelWidth: 15, width: 90}
                , layout: {type:"hbox", align: "stretch", pack: "start"}
                , items: [
                    {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropxpos"}
                    , {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropypos"}
                ]
            }]
        }
        , {
            xtype: "fieldcontainer"
            , width: 500
            , labelWidth: 400
            , fieldLabel: i18n.gettext("Thumbnail inside Destination Picture")
            , labelSeparator: ""
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [{
                xtype: "fieldcontainer"
                , fieldLabel: i18n.gettext("Size of the area")
                , combineErrors: false
                , layout: {type:"hbox", pack: "start"}
                , items: [
                    {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizewidth", width: 80}
                    , {html: "x", xtype: "label", width: 10, padding: 2 }
                    , {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizeheight", width: 80}
                ]
            }, {
                xtype: "container"
                , width: 10
            }, {
                xtype: "fieldcontainer"
                , flex: 1
                , fieldLabel: i18n.gettext("Location")
                , labelWidth: 70
                , defaults: {labelWidth: 15, width: 90}
                , layout: {type:"hbox", align: "stretch", pack: "start"}
                , items: [
                    {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropxpos"}
                    , {xtype : "sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropypos"}
                ]
            }]
        }
    ]
});

