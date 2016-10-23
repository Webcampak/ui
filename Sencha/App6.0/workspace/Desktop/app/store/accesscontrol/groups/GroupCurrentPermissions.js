/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.accesscontrol.groups.GroupCurrentPermissions");
//</debug>
Ext.define("WPAKD.store.accesscontrol.groups.GroupCurrentPermissions", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.accesscontrol.groups.GroupCurrentPermissions",

//    autoLoad: true,
    autoSync: true,

    proxy:{
        type: "direct",
        extraParams: {
            GRO_ID: "0"
        },
        writer: {
            writeAllFields:true
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read:      "ACGroups.getGroupCurrentPermissions",
            create:    "ACGroups.addGroupCurrentPermissions",
            destroy:   "ACGroups.removeGroupCurrentPermissions",
            update:    "ACGroups.updateGroupCurrentPermissions"
        },
	listeners: {
            exception: function(proxy, response, options) {
                var currentStore = Ext.getStore("accesscontrol.groups.Groups");
                currentStore.fireEvent("WPAKD.controller.accesscontrol.groups.Groups.reloadGroupsAssociations");
            }
	}
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext("Group");
            var popupMessage = i18n.gettext("Group modification performed");
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
            this.load();
        }
    }
});






