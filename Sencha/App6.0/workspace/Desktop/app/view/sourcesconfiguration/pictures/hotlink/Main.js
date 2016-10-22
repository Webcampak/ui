/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.hotlink.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.hotlink.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpictureshotlinkmain"

    , title: i18n.gettext("Static pictures (hotlink)")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 150}
    , items: [
        {xtype: "sourcesconfigurationpictureshotlinkcfghotlinksize1"}
        , { xtype: "sourcesconfigurationpictureshotlinkcfghotlinksize2"}
        , {xtype: "sourcesconfigurationpictureshotlinkcfghotlinksize3"}
        , {xtype: "sourcesconfigurationpictureshotlinkcfghotlinksize4"}
        , {
            xtype: "container"
            , layout: {type:"hbox",	align: "stretch", pack: "start"}
            , items : [
                {xtype: "sourcesconfigurationpictureshotlinkcfghotlinkerrorcreate", width: 200,	labelWidth: 150}
                , {
                    flex: 1
                    , xtype: "fieldcontainer"
                    , fieldLabel: i18n.gettext("In case of error, a hotlink with an error message will be displayed")
                    , labelSeparator: ""
                    , labelWidth: 400
                }
            ]
        }
    ]
});

