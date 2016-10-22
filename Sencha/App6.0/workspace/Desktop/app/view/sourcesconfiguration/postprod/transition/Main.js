/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.transition.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.transition.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpostprodtransitionmain"

    , title: i18n.gettext("Transition")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 100}
    , items   : [{
        xtype: "sourcesconfigurationpostprodtransitioncfgtransitionactivate"
        , labelWidth: 150
    },	{
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [{
            xtype: "fieldcontainer"
            , flex: 1
            , fieldLabel: i18n.gettext("Size of the area")
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpostprodtransitioncfgtransitioncropsizewidth", width: 85      }
                , {html: "x", xtype: "label", width: 10, padding: 2                         }
                , {xtype : "sourcesconfigurationpostprodtransitioncfgtransitioncropsizeheight", width: 85   }
            ]
        }, {
            xtype: "fieldcontainer"
            , flex: 1
            , fieldLabel: i18n.gettext("Location")
            , labelWidth: 100
            , defaults: {labelWidth: 15, width: 90}
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items: [
                {xtype : "sourcesconfigurationpostprodtransitioncfgtransitioncropxpos"}
                , {xtype : "sourcesconfigurationpostprodtransitioncfgtransitioncropypos"}
            ]
        }]
    }]
});

