//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.menu.Pictures');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.Pictures", {
    extend: 'Ext.menu.Item'
    , alias: 'widget.desktoptoolbartopmenupictures'

    , text: i18n.gettext('Pictures')
    , itemId: 'menuOpenWEB_DSP_PICTURES'
    , glyph: 0xf030
    , hidden: true
});