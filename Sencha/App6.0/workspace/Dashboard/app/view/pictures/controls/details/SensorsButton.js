/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.controls.details.SensorsButton");
//</debug>
Ext.define("WPAKT.view.pictures.controls.details.SensorsButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturescontrolsdetailssensorsbutton"

    , flex: 1
    , scale: "medium"
    , iconAlign: "left"
    , iconCls: "x-fa fa-bolt"
    , ui: "soft-green"
    , text: i18n.gettext("Sensors")
});