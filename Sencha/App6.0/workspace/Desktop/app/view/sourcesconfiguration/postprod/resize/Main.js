/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.resize.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.resize.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpostprodresizemain"

    , title: i18n.gettext("Resize picture")

    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 100}
    , items   : [{
        xtype: "sourcesconfigurationpostprodresizecfgvideosizeactivate"
    },	{
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [{
            xtype: "fieldcontainer"
            , flex: 1
            , fieldLabel: i18n.gettext("Size of the area")
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpostprodresizecfgvideosizewidth", width: 85       }
                , {html: "x", xtype: "label", width: 10, padding: 2                             }
                , {xtype : "sourcesconfigurationpostprodresizecfgvideosizeheight", width: 85    }
            ]
        }]
    }]
});

