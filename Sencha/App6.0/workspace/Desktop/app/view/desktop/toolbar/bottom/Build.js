/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.bottom.Build");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.Build", {
    extend: "Ext.button.Button"
    , alias : "widget.desktoptoolbarbottombuild"

    , glyph:0xf113 // fa-paper-plane
    , style: "font-family:FontAwesome"
    , href: "https://github.com/Webcampak"
    , text: i18n.gettext("Build: dev")
    , hidden: false
});