/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.relays.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.relays.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationphidgetsrelaysmain"

    , title: i18n.gettext("Relays")

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 320}
    , items: [
        {xtype: "sourcesconfigurationphidgetsrelayscfgphidgeterroractivate"}
        , {xtype: "sourcesconfigurationphidgetsrelayscfgphidgetfailure"}
        , {xtype: "sourcesconfigurationphidgetsrelayscfgphidgetcameraport"}
    ]
});

