//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.groups.managepermissions.GroupCurrentApplications');
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.managepermissions.GroupCurrentApplications", {
    extend: 'Ext.grid.Panel',
    alias : 'widget.accesscontrolgroupsmanagepermissionsgroupcurrentapplications',

    multiSelect: true,

    title: i18n.gettext('Selected Applications'),

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag permissions to add them to the group',
            dragGroup: 'applicationspagesDDGroup',
            dropGroup: 'applicationsavailablepagesDDGroup'
        }
    },

    store: 'accesscontrol.groups.GroupCurrentApplications',
    autoScroll: true,
    columns: [
        {header: 'APP_ID',                  dataIndex: 'APP_ID',    sortable: false,    width: 40,  hidden: true }
        , {header: 'GRO_ID',                dataIndex: 'GRO_ID',    sortable: false,    width: 40,  hidden: true }
        , {header: 'GROAPP_ID',             dataIndex: 'GROAPP_ID', sortable: false,    width: 40,  hidden: true }
        , {header: i18n.gettext('Name'),    dataIndex: 'NAME',      sortable: true,     flex: 1,    editor: 'textfield'    }
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
        tooltip: i18n.gettext('Refresh current applications'),
        action: 'reloadGroupCurrentApplications'
    }]

});


