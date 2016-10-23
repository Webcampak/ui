/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.controls.details.EmailButton");
//</debug>
Ext.define("WPAKT.view.pictures.controls.details.EmailButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturescontrolsdetailsemailbutton"

    , flex: 1
    , scale: "medium"
    , iconAlign: "left"
    , iconCls: "x-fa fa-envelope"
    , ui: "soft-green"
    , text: i18n.gettext("Send Email")    
});