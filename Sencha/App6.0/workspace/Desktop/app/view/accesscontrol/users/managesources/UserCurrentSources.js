//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.managesources.UserCurrentSources');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.managesources.UserCurrentSources", {
    extend: 'Ext.grid.Panel',

    alias : 'widget.accesscontrolusersmanagesourcesusercurrentsources',

    multiSelect: true,

    title: i18n.gettext('Selected Sources'),

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag Sources to add them to the user',
            dragSource: 'SourcepagesDDSource',
            dropSource: 'SourceavailablepagesDDSource'
        }
    },

    store: 'accesscontrol.users.UserCurrentSources',
    autoScroll: true,
    columns: [
        {header: 'USESOU_ID',                   dataIndex: 'USESOU_ID',     sortable: false,    width: 40, hidden: true         }
        , {header: 'SOU_ID',                    dataIndex: 'SOU_ID',        sortable: false,    width: 40, hidden: true         }
        , {header: i18n.gettext('Source ID'),   dataIndex: 'SOURCEID',      sortable: true,     width: 70,   field: {xtype: 'textfield', disabled: true }  }
        , {header: i18n.gettext('Name'),        dataIndex: 'NAME',          sortable: true,     flex: 1,   field: {xtype: 'textfield', disabled: true }  }
        , {header: i18n.gettext('Alerts'),      dataIndex: 'ALERTS_FLAG',   sortable: true,     width: 70  
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
        tooltip: i18n.gettext('Refresh current Sources'),
        action: 'reloadUserCurrentSources'
    }]
    , plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        })
    ]
});


