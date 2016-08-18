//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.groups.managepermissions.GroupAvailableApplications');
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.managepermissions.GroupAvailableApplications", {
    extend: 'Ext.grid.Panel',
    alias : 'widget.accesscontrolgroupsmanagepermissionsgroupavailableapplications',

    multiSelect: true,

    title: i18n.gettext('Available Applications'),

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag permissions to add them to the group',
            dragGroup: 'applicationsavailablepagesDDGroup',
            dropGroup: 'applicationspagesDDGroup'
        }
    },

    store: 'accesscontrol.groups.GroupAvailableApplications',
    autoScroll: true,
    columns: [
        {header: 'APP_ID',                  dataIndex: 'APP_ID',    sortable: false,    width: 40,  hidden: true            }
        , {header: 'GRO_ID',                dataIndex: 'GRO_ID',    sortable: false,    width: 40,  hidden: true            }
        , {header: i18n.gettext('Name'),    dataIndex: 'NAME',      sortable: true,     flex: 1,    editor: 'textfield'     }
    ],
    selType: 'rowmodel',
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate('<p>{NOTES}</p>')
    }],
    collapsible: true,
    animCollapse: false,
    tools:[{
        type:'refresh',
        tooltip: i18n.gettext('Refresh available applications'),
        action: 'reloadGroupAvailableApplications'
    }]

});


