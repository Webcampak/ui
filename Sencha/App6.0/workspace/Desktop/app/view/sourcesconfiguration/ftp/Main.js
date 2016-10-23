/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.ftp.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.ftp.Main", {
    extend: "Ext.panel.Panel",
    alias: "widget.sourcesconfigurationftpmain",

    title: i18n.gettext("FTP")
    , disabled: true
    , scroll: true
    , autoScroll: true
    , defaults: {margin: 10}

    , items: [{
        xtype: "sourcesconfigurationftplocalmain"
    }, {
        xtype: "fieldset"
        , title: i18n.gettext("Remote FTP Servers")
        , flex: 1
        , layout: "fit"
        , items: [{
            xtype: "sourcesconfigurationftpftpserverslist",
            flex: 1,
            dockedItems: [{
                xtype: "toolbar",
                dock: "top",
                items: [{
                    xtype: "button",
                    text: i18n.gettext("Add"),
                    glyph:0xf0fe, // fa-plus-square
                    action: "openAddFtpServer"
                }, {
                    xtype: "button",
                    text: i18n.gettext("Edit"),
                    glyph:0xf14b, // fa-pencil-square
                    action: "openEditFtpServer",
                    itemId: "editFTPServerBtn",
                    disabled: true
                }, {
                    xtype: "button",
                    text: i18n.gettext("Delete"),
                    glyph:0xf146, // fa-minus-square
                    action: "openDeleteFtpServer",
                    itemId: "deleteFTPServerBtn",
                    disabled: true
                }, "->", {
                    xtype: "button",
                    glyph:0xf021, // fa-refresh
                    action: "reloadFtpServers"
                }]
            }]
        }]
    }]
});

