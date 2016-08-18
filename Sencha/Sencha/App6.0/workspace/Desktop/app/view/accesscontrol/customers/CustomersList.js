//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.customers.CustomersList');
//</debug>
Ext.define("WPAKD.view.accesscontrol.customers.CustomersList", {
    extend: 'Ext.grid.Panel'
    , alias : 'widget.accesscontrolcustomerscustomerslist'

    , store: 'accesscontrol.customers.Customers'

    , stateful: true
    , stateId: 'accesscontrolcustomerscustomerslist'

    , autoScroll: true
    , columns: [
        {text: i18n.gettext('CUS_ID'),  dataIndex: 'CUS_ID',    align: 'right',     width: 40,  sortable: true,     hidden: true                }
        , {text: i18n.gettext('Name'),  dataIndex: 'NAME',      align: 'left',      flex: 1,    sortable: true,     field: {xtype: 'textfield'} }
    ]

    , selType: 'rowmodel'
    , plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
            , pluginId: 'rowediting'
        })
        , Ext.create('Ext.grid.plugin.BufferedRenderer', {})
    ]
});
