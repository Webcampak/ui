//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.managesources.UserAvailableSources');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.managesources.UserAvailableSources", {
    extend: 'Ext.grid.Panel',

    alias : 'widget.accesscontrolusersmanagesourcesuseravailablesources',

    multiSelect: true,

    title: i18n.gettext('Available Sources'),

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag Source to add them to the user',
            dragSource: 'SourceavailablepagesDDSource',
            dropSource: 'SourcepagesDDSource'
        }
    },

    store: 'accesscontrol.users.UserAvailableSources',
    autoScroll: true,
    columns: [
        {header: 'USE_ID',                  dataIndex: 'USE_ID',    sortable: false,    width: 40, hidden: true         },
        {header: 'SOU_ID',                  dataIndex: 'SOU_ID',    sortable: false,    width: 40, hidden: true         },
        {header: i18n.gettext('Source ID'), dataIndex: 'SOURCEID',  sortable: true,     width: 70, editor: 'textfield'  },
        {header: i18n.gettext('Name'),      dataIndex: 'NAME',      sortable: true,     flex: 1,   editor: 'textfield'  }
    ],
    selType: 'rowmodel',

    tools:[{
        type:'refresh',
        tooltip: i18n.gettext('Refresh available Sources'),
        action: 'reloadUserAvailableSources'
    }]

});


