/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.save.SaveButton");
//</debug>
Ext.define("WPAKT.view.config.capture.save.SaveButton", {
    extend: "Ext.button.Button"
    , alias: "widget.configcapturesavesavebutton"

    , scale: "medium"
    , iconAlign: "left"
    , iconCls: "x-fa fa-floppy-o"
    , ui: "soft-green"
    , text: i18n.gettext("Save")
});