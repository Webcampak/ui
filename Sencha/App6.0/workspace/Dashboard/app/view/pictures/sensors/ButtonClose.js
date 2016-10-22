/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.sensors.ButtonClose");
//</debug>
Ext.define("WPAKT.view.pictures.sensors.ButtonClose", {
    extend: "Ext.button.Button"
    , alias : "widget.picturessensorsbuttonclose"

    , text: i18n.gettext("Close")
    , scale: "large"
    , iconAlign: "right"
    , iconCls: "x-fa fa-times-circle-o"
});

