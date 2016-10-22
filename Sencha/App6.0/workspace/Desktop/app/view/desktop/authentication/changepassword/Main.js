/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.changepassword.Main");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.changepassword.Main", {
    extend: "Ext.window.Window",
    alias: "widget.desktopauthenticationchangepasswordmain",

    title: i18n.gettext("Change your password"),
    layout: "fit",

    width: 600,
    //height: 220,

    modal: true,

    items: [{
        xtype: "form",
        itemId: "changepasswordform",
        items: [{
            xtype: "fieldset",
            title: i18n.gettext("Current Credentials"),
            margin: "10 10 10 10",
            defaults: {labelWidth: 200, width: 500, margin: "5 5 5 10"},
            items: [
                {xtype: "desktopauthenticationchangepasswordoldpassword"}
            ]
        }, {
            xtype: "fieldset",
            title: i18n.gettext("New Credentials"),
            margin: "10 10 10 10",
            defaults: {labelWidth: 200, width: 500, margin: "5 5 5 10"},
            items: [
                {xtype: "desktopauthenticationchangepasswordnewpassword"}
                , {xtype: "desktopauthenticationchangepasswordnewpasswordverif"}
            ]
        }],
        dockedItems: [{
            xtype: "toolbar",
            dock: "bottom",
            items: [{
                text: i18n.gettext("Cancel"),
                glyph:0xf00d, // cancel
                xtype: "button",
                action: "closeChangePassword"
            }, "->", {
                text: i18n.gettext("Save"),
                glyph:0xf0c7, // disk
                xtype: "button",
                action: "savePassword",
                handler: function() {
                    this.up("form").getForm().isValid();
                }
            }]
        }]
    }]

});