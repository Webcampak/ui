/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.lostpassword.Main");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.lostpassword.Main", {
    extend: "Ext.window.Window",
    alias: "widget.desktopauthenticationlostpasswordmain",

    width: 450,
    maximizable: false,
    minimizable: false,
    closeAction : "hide",
    title: "Lost Password",
    //layout: "fit",

    modal: true,
    frame: true,
    defaults: {padding: "5 5 0 5"},
    layout: {type:"vbox", pack: "start", align: "stretch"},

    items: [{
        xtype: "desktopauthenticationlostpasswordusername"
    }, {
        xtype: "desktopauthenticationlostpasswordemail"
    }, {
        xtype: "container",
        html: "Enter your username and email address to create a new password."
    }],
    dockedItems: [{
        xtype: "toolbar",
        dock: "bottom",
        items: [ "->" ,{
            xtype: "desktopauthenticationlostpasswordbuttonsendpassword"
        }]
    }]

});