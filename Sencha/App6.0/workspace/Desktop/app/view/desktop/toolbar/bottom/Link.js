/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.bottom.Link");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.Link", {
    extend: "Ext.button.Button"
    , alias: "widget.desktoptoolbarbottomlink"

    , style: "font-family:FontAwesome"
    , href: "https://www.webcampak.com"
    , text: i18n.gettext("www.webcampak.com")
    , hidden: false
});