/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.SyncReports");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.SyncReports", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenuconfigsyncreports"

    , text: i18n.gettext("Sync Reports")
    , itemId: "menuOpenWEB_DSP_SYNCREPORTS"
    , glyph: 0xf013
    , hidden: true
});