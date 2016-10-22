/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.AccessControl");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.AccessControl", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenuconfigaccesscontrol"

    , text: i18n.gettext("Access Control")
    , itemId: "menuOpenWEB_CFG_ACCESSCONTROL"
    , glyph: 0xf0c0
    , hidden: true
});