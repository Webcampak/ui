//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.ftp.FtpServersList');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.ftp.FtpServersList", {
    extend: 'Ext.grid.Panel'
    , alias : 'widget.sourcesconfigurationftpftpserverslist'

    , store: 'sourcesconfiguration.FTPServers'

    , autoScroll: true
    , columns: [
        {text: i18n.gettext('ID'),          dataIndex: 'ID',        align: 'right',     width: 40,  sortable: true,     hidden: true                }
        , {text: i18n.gettext('Name'),      dataIndex: 'NAME',      align: 'left',      flex: 1,    sortable: true,     field: {xtype: 'textfield', allowBlank: false} }
        , {text: i18n.gettext('Host'),      dataIndex: 'HOST',      align: 'left',      flex: 1,    sortable: true,     field: {xtype: 'textfield', allowBlank: false} }
        , {text: i18n.gettext('Username'),  dataIndex: 'USERNAME',  align: 'left',      flex: 1,    sortable: true,     field: {xtype: 'textfield', allowBlank: false} }
        , {text: i18n.gettext('Password'),  dataIndex: 'PASSWORD',  align: 'left',      flex: 1,    sortable: true,     field: {xtype: 'textfield', allowBlank: false} }
        , {text: i18n.gettext('Directory'), dataIndex: 'DIRECTORY', align: 'left',      flex: 1.5,  sortable: true,     field: {xtype: 'textfield', allowBlank: false} }
        , {text: i18n.gettext('Active'),    dataIndex: 'ACTIVE',    align: 'left',      flex: 1,    sortable: true,
            field: {
                xtype: 'combobox',
                store: Ext.create('Ext.data.Store', {
                    fields: [{name: 'name', type: 'string'}, { name: 'id', type: 'int'}, { name: 'ACTIVE', type: 'string'}],
                    data : [{name : 'YES', id: 1, ACTIVE: 'yes'},{name : 'NO', id: 0, ACTIVE: 'no'}]
                }),
                displayField: 'name',
                valueField: 'ACTIVE',
                allowBlank: false
            },
            renderer: function(value) {
                if (value == 'yes') {return 'YES';}
                else {return 'NO';}
            }
        }
        , {
            text: i18n.gettext('Xfer')  
            , columns: [            
                , {text: i18n.gettext('Enable'),    dataIndex: 'XFERENABLE',    align: 'left',      flex: 1,    sortable: true,
                    field: {
                        xtype: 'combobox',
                        store: Ext.create('Ext.data.Store', {
                            fields: [{name: 'name', type: 'string'}, { name: 'id', type: 'int'}, { name: 'ACTIVE', type: 'string'}],
                            data : [{name : 'YES', id: 1, ACTIVE: 'yes'},{name : 'NO', id: 0, ACTIVE: 'no'}]
                        }),
                        displayField: 'name',
                        valueField: 'ACTIVE',
                        allowBlank: false
                    },
                    renderer: function(value) {
                        if (value == 'yes') {return 'YES';}
                        else {return 'NO';}
                    }
                }        
                , {text: i18n.gettext('# Threads'),  dataIndex: 'XFERTHREADS',  align: 'right',      flex: 1,    sortable: true,     field: {xtype: 'numberfield', allowBlank: false, minValue: 0, maxValue: 10} }        
            ]
        }
    ]

    , selType: 'rowmodel'
    , plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
            , pluginId: 'rowediting'
        })
        //, Ext.create('Ext.grid.plugin.BufferedRenderer', {})
    ]
});
