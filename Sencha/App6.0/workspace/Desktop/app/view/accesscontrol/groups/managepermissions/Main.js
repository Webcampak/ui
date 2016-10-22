/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.groups.managepermissions.Main");
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.managepermissions.Main", {
    extend: "Ext.window.Window",
    alias: "widget.accesscontrolgroupsmanagepermissionsmain",

    title: i18n.gettext("Manage permissions"),
    layout: "fit",

    width: 800,
    height: 400,

    modal: true,

    items: [{
        xtype: "tabpanel",
        items: [{
            title: i18n.gettext("Applications"),
            itemID: "userApplicationsTab",
            layout: {
                type:"hbox",
                align: "stretch",
                pack: "start"
            },
            items: [{
                flex: 1,
                xtype: "accesscontrolgroupsmanagepermissionsgroupavailableapplications"
            }, {
                flex: 1,
                xtype: "accesscontrolgroupsmanagepermissionsgroupcurrentapplications"
            }]
        },     {
            title: i18n.gettext("Permissions"),
            itemID: "groupPermissionsTab",
            layout: {
                type:"hbox",
                align: "stretch",
                pack: "start"
            },
            items: [{
                flex: 1,
                xtype: "accesscontrolgroupsmanagepermissionsgroupavailablepermissions"
            }, {
                flex: 1,
                xtype: "accesscontrolgroupsmanagepermissionsgroupcurrentpermissions"
            }]
        }]
    }]
});