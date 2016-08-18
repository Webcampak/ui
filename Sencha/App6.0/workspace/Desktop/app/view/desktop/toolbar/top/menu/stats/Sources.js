//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.menu.stats.Sources');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.stats.Sources", {
    extend: 'Ext.menu.Item'
    , alias: 'widget.desktoptoolbartopmenustatssources'

    , text: i18n.gettext('Sources Statistics')
    , itemId: 'menuOpenWEB_DSP_STATS_SOURCES'
    , glyph: 0xf201
    , hidden: true
});