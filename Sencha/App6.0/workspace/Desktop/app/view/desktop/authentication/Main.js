/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.Main");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.Main", {
    extend: "Ext.window.Window",
    alias: "widget.desktopauthenticationmain",

    title: i18n.gettext("Webcampak Authentication"),

    scroll: false,
    autoScroll: false,
    maximizable: false,
    minimizable: false,
    draggable: false,
    closable: false,

    frame: true,
    defaults: {padding: "5 5 5 5"},
    //defaults: {margin: "0 5 5 5"},

    modal: true,

    items: [{
        xtype: "desktopauthenticationusername"
    }, {
        xtype: "desktopauthenticationpassword"
    }, {
        xtype: "desktopauthenticationrememberme"
    }],
    dockedItems: [{
        xtype: "toolbar",
        dock: "bottom",
        items: [{
            text: i18n.gettext("Password"),
            glyph:0xf013, // cog
            iconCls: "icon-lock_png",
            menu: {
                style: { overflow: "visible" },
                itemId: "menu",
                items: [{
                    xtype: "desktopauthenticationbuttonrecoverpassword"
                }]
            }
        }, "->" ,{
            xtype: "desktopauthenticationbuttonconnect"
        }]
    }]

});
