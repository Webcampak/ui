/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.ButtonSend");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.ButtonSend", {
    extend: "Ext.button.Button"
    , alias : "widget.desktopsendemailbuttonsend"

    , text: i18n.gettext("Send Email")
    , glyph:0xf003 // envelope
});

