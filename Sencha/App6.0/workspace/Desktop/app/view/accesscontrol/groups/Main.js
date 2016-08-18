//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.groups.Main');
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.Main", {
    extend: 'Ext.container.Container',
    alias: 'widget.accesscontrolgroupsmain',

    title: i18n.gettext('Groups'),
    tooltip: i18n.gettext('Add/Edit/Delete Groups'),

    layout: {
        type:'vbox',
        pack: 'start',
        align: 'stretch'
    },

    items: [{
        flex: 2,
        xtype: 'accesscontrolgroupsgroupslist',
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                text: i18n.gettext('Add'),
                glyph:0xf0fe, // fa-plus-square
                action: 'openAddGroup'
            }, {
                xtype: 'button',
                text: i18n.gettext('Edit'),
                glyph:0xf14b, // fa-pencil-square
                action: 'openEditGroup',
                itemId: 'editGroupBtn',
                disabled: true
            }, {
                xtype: 'button',
                text: i18n.gettext('Delete'),
                glyph:0xf146, // fa-minus-square
                action: 'openDeleteGroup',
                itemId: 'deleteGroupBtn',
                disabled: true
            }, '-', {
                xtype: 'button',
                text: i18n.gettext('Permissions'),
                glyph:0xf135, // fa-rocket
                action: 'openPermissionAssignment',
                itemId: 'openPermissionAssignmentBtn',
                disabled: true
            }, '->', {
                xtype: 'accesscontrolgroupssearch'
            }, '-', {
                xtype: 'button',
                glyph:0xf021, // fa-refresh
                action: 'reloadGroups'
            }]
        }, {
            xtype: 'toolbar',
            dock: 'bottom',
            items: ['->', {
                xtype: 'accesscontrolgroupstoolbarrecords'
            }]
        }]
    }]

});