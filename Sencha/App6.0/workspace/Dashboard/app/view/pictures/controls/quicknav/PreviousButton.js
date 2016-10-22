/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.controls.quicknav.PreviousButton");
//</debug>
Ext.define("WPAKT.view.pictures.controls.quicknav.PreviousButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturescontrolsquicknavpreviousbutton"

    , flex: 1
    , scale: "medium"
    , iconAlign: "left"
    , iconCls: "x-fa fa-step-backward"
    , ui: "soft-green"
    , text: i18n.gettext("Previous")    
});