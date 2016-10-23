/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.ButtonCancel");
//</debug>
Ext.define("WPAKT.view.core.email.ButtonCancel", {
    extend: "Ext.button.Button"
    , alias : "widget.coreemailbuttoncancel"

    , text: i18n.gettext("Cancel")
    , scale: "large"
    , iconAlign: "right"
    , iconCls: "x-fa fa-ban"
});

