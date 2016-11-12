/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.crop.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.crop.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpicturescropmain"

    , title: i18n.gettext("Crop picture")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 100}
    , items   : [{
        xtype: "sourcesconfigurationpicturescropcfgcropactivate"
    },	{
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [{
            xtype: "fieldcontainer"
            , flex: 1
            , fieldLabel: i18n.gettext("Size of the area")
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpicturescropcfgcropsizewidth", width: 80      }
                , {html: "x", xtype: "label", width: 10, padding: 2                         }
                , {xtype : "sourcesconfigurationpicturescropcfgcropsizeheight", width: 80   }
            ]
        }, {
            xtype: "fieldcontainer"
            , flex: 1
            , fieldLabel: i18n.gettext("Location")
            , labelWidth: 100
            , defaults: {labelWidth: 15, width: 90}
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpicturescropcfgcropxpos"}
                , {xtype : "sourcesconfigurationpicturescropcfgcropypos"}
            ]
        }]
    }]
});

