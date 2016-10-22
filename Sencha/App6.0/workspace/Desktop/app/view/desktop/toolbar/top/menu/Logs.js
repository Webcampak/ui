/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.Logs");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.Logs", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenulogs"

    , text: i18n.gettext("Logs")
    , itemId: "menuOpenWEB_DSP_LOGS"
    , glyph: 0xf03a
    , hidden: true
});