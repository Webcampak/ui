/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.lostpassword.ButtonSendPassword");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.lostpassword.ButtonSendPassword", {
    extend: "Ext.button.Button",
    alias : "widget.desktopauthenticationlostpasswordbuttonsendpassword",

    config: {
        glyph:0xf003 // fa-envelope-o
    },
    //iconCls: "icon-email_png",

    text: i18n.gettext("Send new Password")
});

