/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.stats.System");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.stats.System", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenustatssystem"

    , text: i18n.gettext("System Statistics")
    , itemId: "menuOpenWEB_DSP_STATS_SYSTEM"
    , glyph: 0xf1fe
    , hidden: true
});