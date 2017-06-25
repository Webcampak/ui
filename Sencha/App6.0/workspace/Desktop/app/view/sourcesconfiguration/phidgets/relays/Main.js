/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.relays.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.relays.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationphidgetsrelaysmain"

    , title: i18n.gettext("Power-cycle camera")
    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 170}
    , items: [
        {xtype: "sourcesconfigurationphidgetsrelayscfgphidgetcameraactivate"}
        , {
            xtype: "container"
            , layout: {type:"hbox",	align: "stretch", pack: "start"}
            , items   : [{
                xtype: "sourcesconfigurationphidgetsrelayscfgphidgetcamerarelayport"
                , labelWidth: 170
                , flex: 1
            }, {
                xtype: "container"
                , width: 10
            }, {
                xtype: "sourcesconfigurationphidgetsrelayscfgphidgetcamerasensorport"
                , labelWidth: 170
                , flex: 1
            }]
        }
        , {
            xtype: "container"
            , layout: {type:"hbox",	align: "stretch", pack: "start"}
            , items   : [{
                xtype: "sourcesconfigurationphidgetsrelayscfgphidgetcamerafailure"
                , labelWidth: 170
                , flex: 1
            }, {
                xtype: "container"
                , width: 10
            }, {
                xtype: "sourcesconfigurationphidgetsrelayscfgphidgetcamerapause"
                , labelWidth: 170
                , flex: 1
            }]
        }
    ]
});

