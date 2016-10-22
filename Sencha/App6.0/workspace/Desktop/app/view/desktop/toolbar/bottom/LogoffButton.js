/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.bottom.LogoffButton");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.LogoffButton", {
    extend: "Ext.button.Button"
    , alias : "widget.desktoptoolbarbottomlogoffbutton"

    , glyph:0xf08b // sign-out
    , style: "font-family:FontAwesome"

    , href: "logout"
});