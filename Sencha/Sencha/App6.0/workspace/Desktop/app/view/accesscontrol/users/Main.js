//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.Main');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.Main", {
    extend: 'Ext.container.Container',
    alias: 'widget.accesscontrolusersmain',

    title: i18n.gettext('Users'),
    tooltip: i18n.gettext('Add/Edit/Delete Users'),

    layout: {
        type:'vbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [{
        flex: 2,
        xtype: 'accesscontrolusersuserslist',
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: i18n.gettext('Add'),
                glyph:0xf0fe, // fa-plus-square
                action: 'openAddUser'
            }, {
                xtype: 'button',
                text: i18n.gettext('Edit'),
                glyph:0xf14b, // fa-pencil-square
                action: 'openEditUser',
                itemId: 'editUserBtn',
                disabled: true
            }, {
                xtype: 'button',
                text: i18n.gettext('Delete'),
                glyph:0xf146, // fa-minus-square
                action: 'openDeleteUser',
                itemId: 'deleteUserBtn',
                disabled: true
            }, '-', {
                xtype: 'button',
                text: i18n.gettext('Sources'),
                glyph:0xf030, // fa-minus-square
                action: 'openSourceAssignment',
                itemId: 'openSourceAssignmentBtn',
                disabled: true
            }, '->', {
                xtype: 'accesscontroluserssearch'
            }, '-', {
                xtype: 'button',
                glyph:0xf021, // fa-refresh
                action: 'reloadUsers'
            }]
        }, {
            xtype: 'toolbar',
            dock: 'bottom',
            items: ['->', {
                xtype: 'accesscontroluserstoolbarrecords'
            }]
        }]
    }]

});