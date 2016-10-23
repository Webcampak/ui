/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.groups.managepermissions.GroupAvailablePermissions");
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.managepermissions.GroupAvailablePermissions", {
    extend: "Ext.grid.Panel",

    alias : "widget.accesscontrolgroupsmanagepermissionsgroupavailablepermissions",

    multiSelect: true,

    title: i18n.gettext("Available Permissions"),

    viewConfig: {
        plugins: {
            ptype: "gridviewdragdrop",
            dragText: "Drag permissions to add them to the group",
            dragGroup: "permissionsavailablepagesDDGroup",
            dropGroup: "permissionspagesDDGroup"
        }
    },

    store: "accesscontrol.groups.GroupAvailablePermissions",
    autoScroll: true,
    columns: [
        {header: "PER_ID",  dataIndex: "PER_ID",  sortable: false,     width: 40, hidden: true    },
        {header: "GRO_ID",  dataIndex: "GRO_ID",  sortable: false,     width: 40, hidden: true },
        {header: i18n.gettext("Name"),            dataIndex: "NAME",    sortable: true,     flex: 1,     editor: "textfield"    }
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
        tooltip: i18n.gettext("Refresh available permissions"),
        action: "reloadGroupAvailablePermissions"
    }]

});


