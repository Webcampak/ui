/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.XferReports");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.XferReports", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenuconfigxferreports"

    , text: i18n.gettext("Xfer Reports")
    , itemId: "menuOpenWEB_DSP_XFERREPORTS"
    , glyph: 0xf013
    , hidden: true
});