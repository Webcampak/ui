/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.groups.managepermissions.GroupCurrentPermissions");
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.managepermissions.GroupCurrentPermissions", {
    extend: "Ext.grid.Panel",

    alias : "widget.accesscontrolgroupsmanagepermissionsgroupcurrentpermissions",

    multiSelect: true,

    title: i18n.gettext("Selected Permissions"),

    viewConfig: {
        plugins: {
            ptype: "gridviewdragdrop",
            dragText: "Drag permissions to add them to the group",
            dragGroup: "permissionspagesDDGroup",
            dropGroup: "permissionsavailablepagesDDGroup"
        }
    },

    store: "accesscontrol.groups.GroupCurrentPermissions",
    autoScroll: true,
    columns: [
        {header: "PER_ID",              dataIndex: "PER_ID",    sortable: false,    width: 40,  hidden: true        },
        {header: "GRO_ID",              dataIndex: "GRO_ID",    sortable: false,    width: 40,  hidden: true        },
        {header: "GROPER_ID",           dataIndex: "GROPER_ID", sortable: false,    width: 40,  hidden: true        },
        {header: i18n.gettext("Name"),  dataIndex: "NAME",      sortable: true,     flex: 1,    editor: "textfield" }
    ],
    selType: "rowmodel",
    plugins: [{
        ptype: "rowexpander",
        rowBodyTpl : new Ext.XTemplate("<p>{NOTES}</p>")
    }],
    collapsible: true,
    animCollapse: false,
    tools:[{
        type:"refresh",
        tooltip: i18n.gettext("Refresh current permissions"),
        action: "reloadGroupCurrentPermissions"
    }]

});


