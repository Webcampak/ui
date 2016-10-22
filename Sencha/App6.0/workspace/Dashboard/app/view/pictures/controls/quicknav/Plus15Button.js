/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.controls.quicknav.Plus15Button");
//</debug>
Ext.define("WPAKT.view.pictures.controls.quicknav.Plus15Button", {
    extend: "Ext.button.Button"
    , alias : "widget.picturescontrolsquicknavplus15button"

    , flex: 1                    
    , scale: "medium"
    , iconAlign: "right"
    , iconCls: "x-fa fa-plus"
    , ui: "soft-green"
    , text: i18n.gettext("15")     
});