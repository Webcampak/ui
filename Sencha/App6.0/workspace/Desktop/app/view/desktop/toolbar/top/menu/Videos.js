/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.Videos");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.Videos", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenuvideos"

    , text: i18n.gettext("Videos")
    , itemId: "menuOpenWEB_DSP_VIDEOS"
    , glyph: 0xf03d
    , hidden: true
});