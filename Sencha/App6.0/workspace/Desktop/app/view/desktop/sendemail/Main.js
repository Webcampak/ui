/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.Main");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.Main", {
    extend: "Ext.window.Window",
    alias: "widget.desktopsendemailmain",

    title: i18n.gettext("Send an Email"),

    width: 900,
    height: 600,

    stateful: true,
    stateId: "desktopsendemailmain",

    scroll: true,
    autoScroll: true,
    maximizable: false,
    minimizable: false,

    constrainHeader: true,

    closeAction : "hide",
//    onEsc: Ext.emptyFn,

    modal: true,

    layout: {
        type:"vbox",
        pack: "start",
        align: "stretch"
    },
    defaults: {margin: "5 5 0 5"},
    items: [{
        xtype: "desktopsendemailsendfrom"
    }, {
        xtype: "desktopsendemailsendto"
    }, {
        xtype: "desktopsendemailsendcc"
    }, {
        xtype: "desktopsendemailemailsubject"
    }, {
        xtype: "desktopsendemailemailattachments"
    }, {
        xtype: "desktopsendemailemailbody",
        flex: 1
    }],
    dockedItems: [{
        xtype: "toolbar",
        dock: "bottom",
        items: ["->", {
            xtype: "desktopsendemailbuttoncancel"
        }, {
            xtype: "desktopsendemailbuttonsend"
        }]
    }]
});