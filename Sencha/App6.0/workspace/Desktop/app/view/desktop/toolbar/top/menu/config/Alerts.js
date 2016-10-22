/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.Alerts");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.Alerts", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenuconfigalerts"

    , text: i18n.gettext("Email Alerts")
    , itemId: "menuOpenWEB_CFG_ALERTS"
    , glyph: 0xf0a2
    , hidden: true
});