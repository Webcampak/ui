/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.graphs.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.graphs.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationphidgetsgraphsmain"

    , title: i18n.gettext("Graphs")

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 270}
    , items: [
        {xtype: "sourcesconfigurationphidgetsgraphscfgphidgetsensorsgraph"}
        , {
            xtype: "container",
            layout: {type:"hbox",	align: "stretch",	pack: "start"},
            items   : [
                {flex: 1, labelWidth: 270, xtype: "sourcesconfigurationphidgetsgraphscfgftpphidgetserverid"}
                , {width: 10, xtype: "container"}
                , {width: 200, labelWidth: 120,   xtype: "sourcesconfigurationphidgetsgraphscfgftpphidgetserverretry"}
            ]
        }
    ]
});

