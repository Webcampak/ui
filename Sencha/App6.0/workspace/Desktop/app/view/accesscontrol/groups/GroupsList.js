//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.groups.GroupsList');
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.GroupsList", {
    extend: 'Ext.grid.Panel',
    alias : 'widget.accesscontrolgroupsgroupslist',

    store: 'accesscontrol.groups.Groups',

    stateful: true,
    stateId: 'accesscontrolgroupsgroupslist',

    autoScroll: true,
    columns: [
        {text: i18n.gettext('GRO_ID'),  dataIndex: 'GRO_ID',    align: 'right',   width: 40,   sortable: true,     hidden: true                                     },
        {text: i18n.gettext('Name'),    dataIndex: 'NAME',      align: 'left',    flex: 1,     sortable: true,     allowBlank: false,   field: {xtype: 'textfield'} },
        {text: i18n.gettext('Notes'),   dataIndex: 'NOTES',     align: 'left',    flex: 3,     sortable: true,                          field: {xtype: 'textfield'} }
     ],

    selType: 'rowmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            pluginId: 'rowediting'
        }),
        Ext.create('Ext.grid.plugin.BufferedRenderer', {})
    ]
});