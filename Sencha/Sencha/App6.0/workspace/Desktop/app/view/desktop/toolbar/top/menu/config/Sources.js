//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.Sources');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.Sources", {
    extend: 'Ext.menu.Item'
    , alias: 'widget.desktoptoolbartopmenuconfigsources'

    , text: i18n.gettext('Sources')
    , itemId: 'menuOpenWEB_CFG_SOURCES'
    , glyph: 0xf013
    , hidden: true
});