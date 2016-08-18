//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.sources.manageusers.SourceCurrentUsers');
//</debug>
Ext.define("WPAKD.view.accesscontrol.sources.manageusers.SourceCurrentUsers", {
    extend: 'Ext.grid.Panel',

    alias : 'widget.accesscontrolsourcesmanageuserssourcecurrentusers',

    multiSelect: true,

    title: i18n.gettext('Selected users'),

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag sources to add them to the user',
            dragSource: 'sourcepagesDDSource',
            dropSource: 'sourceavailablepagesDDSource'
        }
    },

    store: 'accesscontrol.sources.SourceCurrentUsers',
    autoScroll: true,
    columns: [
        {header: 'USE_ID',      dataIndex: 'USE_ID',    sortable: false,     width: 40, hidden: true    }
        , {header: 'SOU_ID',    dataIndex: 'SOU_ID',    sortable: false,     width: 40, hidden: true }
        , {header: 'USESOU_ID', dataIndex: 'USESOU_ID', sortable: false,     width: 40, hidden: true }
        , {header: i18n.gettext('Username'),      dataIndex: 'USERNAME',    sortable: true,     flex: 0.8,  field: {xtype: 'textfield', disabled: true }    }
        , {header: i18n.gettext('Firstname'),     dataIndex: 'FIRSTNAME',   sortable: true,     flex: 1,    field: {xtype: 'textfield', disabled: true }    }
        , {header: i18n.gettext('Lastname'),      dataIndex: 'LASTNAME',    sortable: true,     flex: 1,    field: {xtype: 'textfield', disabled: true }    }
        , {header: i18n.gettext('Alerts'),        dataIndex: 'ALERTS_FLAG', sortable: true,     flex: 1  
            , field: {
                xtype: 'combobox'
                , store: Ext.create('Ext.data.Store', {
                    fields: [{name: 'name', type: 'string'}, { name: 'id', type: 'int'}, { name: 'ALERTS_FLAG', type: 'string'}]
                    , data : [{name : i18n.gettext('YES'), id: 1, ALERTS_FLAG: 'Y'},{name : i18n.gettext('NO'), id: 0, ALERTS_FLAG: 'N'}]
                })
                , displayField: 'name'
                , valueField: 'ALERTS_FLAG'
            }
            , renderer: function(value) {
                if (value == 'Y') {return 'YES';}
                else {return 'NO';}
            }
        }        
    ],
    selType: 'rowmodel',

    tools:[{
        type:'refresh',
        tooltip: i18n.gettext('Refresh current sources'),
        action: 'reloadSourceCurrentUsers'
    }]
    , plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ]
});


