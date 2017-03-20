/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.crop.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.crop.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpostprodcropmain"

    , title: i18n.gettext("Crop picture")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items   : [{
        xtype: "sourcesconfigurationpostprodcropcfgcropactivate"
    },	{
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [{
            xtype: "fieldcontainer"
            , flex: 1
            , fieldLabel: i18n.gettext("Size of the area")
            , labelWidth: 200
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpostprodcropcfgcropsizewidth", width: 85      }
                , {html: "x", xtype: "label", width: 10, padding: 2                         }
                , {xtype : "sourcesconfigurationpostprodcropcfgcropsizeheight", width: 85   }
            ]
        }, {
            xtype: "fieldcontainer"
            , flex: 1
            , fieldLabel: i18n.gettext("Location")
            , labelWidth: 200
            , defaults: {labelWidth: 15, width: 90}
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpostprodcropcfgcropxpos"}
                , {xtype : "sourcesconfigurationpostprodcropcfgcropypos"}
            ]
        }]
    }]
});

