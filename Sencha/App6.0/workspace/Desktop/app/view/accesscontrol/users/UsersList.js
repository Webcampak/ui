/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.users.UsersList");
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.UsersList", {
    extend: "Ext.grid.Panel",
    alias : "widget.accesscontrolusersuserslist",

    store: "accesscontrol.users.Users",

    stateful: true,
    stateId: "accesscontrolusersuserslist",

    autoScroll: true,
    columns: [
        {text: i18n.gettext("USE_ID"),    dataIndex: "USE_ID",             align: "right",   width: 40,     sortable: true,     hidden: true},
        {text: i18n.gettext("Username"),  dataIndex: "USERNAME",           align: "left",    flex: 1,     sortable: true,     allowBlank: false,   field: {xtype: "textfield", disabled: true }    },
        {text: i18n.gettext("Group"),     dataIndex: "GRO_ID",             align: "left",    flex: 1,        sortable: true,
          field: {xtype: "accesscontroluserssharedgroupslist"},
          renderer: function(value) {
              if (!isNaN(value)){
                  if (Ext.data.StoreManager.lookup("accesscontrol.groups.Groups").findRecord("GRO_ID", value, 0, false, false, true) != null) {return Ext.data.StoreManager.lookup("accesscontrol.groups.Groups").findRecord("GRO_ID", value, 0, false, false, true).get("NAME");}
                  else {return value;}
              }
              else if (typeof value != "undefined") {
                  if (value.name != null) {return value.name;}
                  else {return "";}
              }
              else {return "";}
          }
        },
        {text: i18n.gettext("Customer"),     dataIndex: "CUS_ID",             align: "left",        flex: 1,        sortable: true,
          field: {xtype: "accesscontroluserssharedcustomerslist"},
          renderer: function(value) {
              if (!isNaN(value)){
                  if (Ext.data.StoreManager.lookup("accesscontrol.customers.Customers").findRecord("CUS_ID", value, 0, false, false, true) != null) {return Ext.data.StoreManager.lookup("accesscontrol.customers.Customers").findRecord("CUS_ID", value, 0, false, false, true).get("NAME");}
                  else {return value;}
              }
              else if (typeof value != "undefined") {
                  if (value.name != null) {return value.name;}
                  else {return "";}
              }
              else {return "";}
          }
        },
        {text: i18n.gettext("Firstname"), dataIndex: "FIRSTNAME",     align: "left",    flex: 1,     sortable: true,                          field: {xtype: "textfield"                 }    },
        {text: i18n.gettext("Lastname"),  dataIndex: "LASTNAME",      align: "left",    flex: 1,     sortable: true,                          field: {xtype: "textfield"                 }    },
        {text: i18n.gettext("E-Mail"),    dataIndex: "EMAIL",         align: "left",    flex: 1,     sortable: true,                          field: {xtype: "textfield", vtype: "email" }    },
        {text: i18n.gettext("Active"),    dataIndex: "ACTIVE_FLAG",   align: "left",    flex: 1,     sortable: true,
        field: {
                xtype: "combobox",
                store: Ext.create("Ext.data.Store", {
                  fields: [{name: "name", type: "string"}, { name: "id", type: "int"}, { name: "ACTIVE_FLAG", type: "string"}],
                    data : [{name : "YES",     id: 1, ACTIVE_FLAG: "Y"    },{name : "NO",     id: 0, ACTIVE_FLAG: "N"    }]
                }),
              displayField: "name",
              valueField: "ACTIVE_FLAG"
            },
          renderer: function(value) {
              if (value == "Y") {return "YES";}
              else {return "NO";}
          }
        }
    ],

    selType: "rowmodel",
    plugins: [
        Ext.create("Ext.grid.plugin.RowEditing", {
            clicksToEdit: 2
        }),
        Ext.create("Ext.grid.plugin.BufferedRenderer", {})
    ]
});
