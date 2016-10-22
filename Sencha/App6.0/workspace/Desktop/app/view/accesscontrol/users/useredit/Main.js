/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.useredit.Main");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.useredit.Main", {
    extend: "Ext.window.Window",
    alias: "widget.accesscontrolusersusereditmain",

    title: i18n.gettext("Update a user"),
    layout: "fit",

    width: 580,

    modal: true,

    items: [{
        xtype: "form",
        itemId: "adduserform",
        items: [{
            xtype: "fieldset",
            title: i18n.gettext("User Credentials"),
            margin: "10 10 10 10",
            defaults: {labelWidth: 200, width: 500, margin: "5 5 5 10"},
            items: [
                {xtype: "accesscontroluserssharedusername"}
                , {xtype: "accesscontroluserssharedpassword"}
                , {xtype: "accesscontroluserssharedactiveflag"}
                , {xtype: "accesscontroluserssharedchangepwdflag"}
            ]
        }, {
            xtype: "fieldset",
            title: i18n.gettext("Administrative Details"),
            margin: "10 10 10 10",
            defaults: {labelWidth: 200, width: 500, margin: "5 5 5 10"},
            items: [
                {xtype: "accesscontroluserssharedcustomer"}
                , {xtype: "accesscontroluserssharedgroup"}
                , {xtype: "accesscontroluserssharedfirstname"}
                , {xtype: "accesscontroluserssharedlastname"}
                , {xtype: "accesscontroluserssharedemail"}
            ]
        }],
        buttons: [{
            text: i18n.gettext("Update"),
            glyph:0xf0c7, // disk
            action: "editUser",
            formBind: true,
            handler: function() {
                 this.up("form").getForm().isValid();
            }
        },{
            text: i18n.gettext("Cancel"),
            glyph:0xf00d, // cancel
            action: "closeEditUser",
            handler: function() {
                 this.up("form").getForm().reset();
            }
        }]
    }]
});