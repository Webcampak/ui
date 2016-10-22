/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.Main");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.Main", {
    extend: "Ext.menu.Item"
    , alias: "widget.desktoptoolbartopmenuconfigmain"

    , text: i18n.gettext("Configuration")
    , glyph: 0xf013
    , hidden: true
    , menu: {
        items: [
            {xtype: "desktoptoolbartopmenuconfigsources"}
            , {xtype: "desktoptoolbartopmenuconfigaccesscontrol"}
            , {xtype: "desktoptoolbartopmenuconfigsystem"}
            , {xtype: "desktoptoolbartopmenuconfigdevices"}
            , {xtype: "desktoptoolbartopmenuconfigalerts"}
//            , {xtype: "desktoptoolbartopmenuconfigsyncreports"}
        ]
    }
});

