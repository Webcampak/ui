//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.sources.SourcesList');
//</debug>
Ext.define("WPAKD.view.accesscontrol.sources.SourcesList", {
    extend: 'Ext.grid.Panel',
    alias : 'widget.accesscontrolsourcessourceslist',

    store: 'accesscontrol.sources.Sources',

    stateful: true,
    stateId: 'accesscontrolsourcessourceslist',

    autoScroll: true,
    columns: [
        {text: i18n.gettext('SOU_ID'),              dataIndex: 'SOU_ID',            align: 'right', width: 40,  sortable: true,     hidden: true                },
        {text: i18n.gettext('Name'),                dataIndex: 'NAME',              align: 'left',  flex: 1,    sortable: true,     field: {xtype: 'textfield'} },
        {text: i18n.gettext('Source ID'),           dataIndex: 'SOURCEID',          align: 'right', width: 80,  sortable: true,     field: {xtype: 'numberfield'} },
        {text: i18n.gettext('Weight'),              dataIndex: 'WEIGHT',            align: 'right', width: 80,  sortable: true,     field: {xtype: 'numberfield'} },
        {text: i18n.gettext('Quota (GB)'),          dataIndex: 'QUOTA',             align: 'right', width: 100,  sortable: true,     field: {xtype: 'numberfield'}
            , renderer: function(value) {
              return Ext.util.Format.fileSize(value)
            } 
        },
        {text: i18n.gettext('Remote Host'),         dataIndex: 'REMOTE_HOST',       align: 'left',  flex: 1,    sortable: true,     field: {xtype: 'textfield'} },
        {text: i18n.gettext('Remote Username'),     dataIndex: 'REMOTE_USERNAME',   align: 'left',  flex: 1,    sortable: true,     field: {xtype: 'textfield'} },
        {text: i18n.gettext('Remote Password'),     dataIndex: 'REMOTE_PASSWORD',   align: 'left',  flex: 1,    sortable: true,     field: {xtype: 'textfield'} }
     ],

    selType: 'rowmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
            , pluginId: 'rowediting'
            //, validateedit: function(editor, context) {
            //    console.log(editor);
            //    console.log(context);
            //    console.log(context.record);
            //}            
        }),
        Ext.create('Ext.grid.plugin.BufferedRenderer', {})
    ]
});