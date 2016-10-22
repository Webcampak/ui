/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.bottom.Main");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.Main", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.desktoptoolbarbottommain",

    dock: "bottom",

    config: {
        layout: {type: "hbox", align : "stretch", pack  : "start"},
        items: [{
            xtype: "tbtext",
            text: i18n.gettext("<a href=\"http://www.webcampak.com\" target=\"_blank\">www.webcampak.com</a>")
        }, "->", {
            xtype: "desktoptoolbarbottomconnectionbutton"
        }, "-", {
            xtype: "desktoptoolbarbottomloadingbutton"
        }, {
            xtype: "desktoptoolbarbottomexceptionbutton"
        }, "-", {
            xtype: "desktoptoolbarbottomlogoffbutton"
        }, {
            xtype: "desktoptoolbarbottombuild"
        }]
    }
});
