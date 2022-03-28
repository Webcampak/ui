/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.menu.Main");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.Main", {
    extend: "Ext.button.Button"
    , alias: "widget.desktoptoolbartopmenumain"

    , text: i18n.gettext("Webcampak")
    , glyph: 0xf030
    , style: "font-family:FontAwesome"

    , menu: {
        style: { overflow: "visible" }
        , items: [
            { xtype: "desktoptoolbartopmenupictures" }
            , { xtype: "desktoptoolbartopmenuvideos" }
            , "-"
            , { xtype: "desktoptoolbartopmenustatsmain" }
            , "-"
            , { xtype: "desktoptoolbartopmenuconfigmain" }
            , "-"
            , { xtype: "desktoptoolbartopmenulogs" }
            , "-"
        ]

    }
});