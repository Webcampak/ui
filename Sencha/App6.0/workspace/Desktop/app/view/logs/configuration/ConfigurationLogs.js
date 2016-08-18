//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.logs.configuration.ConfigurationLogs');
//</debug>
Ext.define("WPAKD.view.logs.configuration.ConfigurationLogs", {
    extend: 'Ext.grid.Panel',
    alias : 'widget.logsconfigurationconfigurationlogs',

    store: 'logs.Configuration',

    autoScroll: true,
    columns: [
        {text: i18n.gettext('Line'),            dataIndex: 'LINE',      align: 'left',    width: 50,   sortable: true, hidden: true }
        , {text: i18n.gettext('Date'),          dataIndex: 'DATE',      align: 'left',    flex: 1,     sortable: true, xtype: 'datecolumn', formatter:'date("Y-m-d H:i")' }
        , {text: i18n.gettext('User'),          dataIndex: 'USERNAME',  align: 'left',    flex: 0.5,   sortable: true  }
        , {text: i18n.gettext('File'),          dataIndex: 'FILE',      align: 'left',    flex: 1,     sortable: true  }
        , {text: i18n.gettext('Parameter'),     dataIndex: 'PARAMETER', align: 'left',    flex: 1,     sortable: true  }
        , {text: i18n.gettext('Old'),           dataIndex: 'OLD',       align: 'left',    flex: 0.5,   sortable: true  }
        , {text: i18n.gettext('new'),           dataIndex: 'NEW',       align: 'left',    flex: 0.5,   sortable: true  }
    ],

    selType: 'rowmodel'
});


