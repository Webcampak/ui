/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.ButtonCancel");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.ButtonCancel", {
    extend: "Ext.button.Button"
    , alias : "widget.desktopsendemailbuttoncancel"

    , text: i18n.gettext("Cancel")
    , glyph:0xf05e // ban
});

