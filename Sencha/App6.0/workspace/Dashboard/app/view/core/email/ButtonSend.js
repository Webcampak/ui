/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.ButtonSend");
//</debug>
Ext.define("WPAKT.view.core.email.ButtonSend", {
    extend: "Ext.button.Button"
    , alias : "widget.coreemailbuttonsend"

    , text: i18n.gettext("Send Email")
    , scale: "large"
    , iconAlign: "right"
    , iconCls: "x-fa fa-check"
});

