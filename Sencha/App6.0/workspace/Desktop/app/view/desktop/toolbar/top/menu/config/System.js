/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.System");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.System", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenuconfigsystem"

    , text: i18n.gettext("System Conf.")
    , itemId: "menuOpenWEB_CFG_SYSTEM"
    , glyph: 0xf013
    , hidden: true
});