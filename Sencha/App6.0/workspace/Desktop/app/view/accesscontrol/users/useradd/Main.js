//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.useradd.Main');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.useradd.Main", {
    extend: 'Ext.window.Window',
    alias: 'widget.accesscontrolusersuseraddmain',

    title: i18n.gettext('Add a user'),
    layout: 'fit',

    width: 580,

    modal: true,

    items: [{
        xtype: 'form',
        itemId: 'adduserform',
        items: [{
            xtype: 'fieldset',
            title: i18n.gettext('User Credentials'),
            margin: '10 10 10 10',
            defaults: {labelWidth: 200, width: 500, margin: '5 5 5 10'},
            items: [
                {xtype: 'accesscontroluserssharedusername'}
                , {xtype: 'accesscontroluserssharedpassword'}
                , {xtype: 'accesscontroluserssharedactiveflag'}
                , {xtype: 'accesscontroluserssharedchangepwdflag'}
            ]
        }, {
            xtype: 'fieldset',
            title: i18n.gettext('Administrative Details'),
            margin: '10 10 10 10',
            defaults: {labelWidth: 200, width: 500, margin: '5 5 5 10'},
            items: [
                {xtype: 'accesscontroluserssharedcustomer'}
                , {xtype: 'accesscontroluserssharedgroup'}
                , {xtype: 'accesscontroluserssharedfirstname'}
                , {xtype: 'accesscontroluserssharedlastname'}
                , {xtype: 'accesscontroluserssharedemail'}
            ]
        }],
        buttons: [{
            text: i18n.gettext('Cancel'),
            glyph:0xf00d, // cancel
            action: 'closeAddUser',
            handler: function() {
                 this.up('form').getForm().reset();
            }
        },{
            text: i18n.gettext('Add'),
            glyph:0xf0c7, // disk
            action: 'addUser',
            formBind: true,
            handler: function() {
                 this.up('form').getForm().isValid();
            }
        }]
    }]
});