/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.accesscontrol.groups.Groups");
//</debug>
Ext.define("WPAKD.store.accesscontrol.groups.Groups", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.accesscontrol.groups.Groups",

    autoSync: false,

    proxy:{
        type: "direct",
        writer: {
            writeAllFields:true
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read:       "ACGroups.getGroups",
            create:     "ACGroups.addGroup",
            destroy:    "ACGroups.removeGroup",
            update:     "ACGroups.updateGroup"
        },
	listeners: {
            exception: function(proxy, response, options) {
                var currentStore = Ext.getStore("accesscontrol.groups.Groups");
                currentStore.fireEvent("WPAKD.controller.accesscontrol.groups.Groups.openEditGroup");
            }
	}
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext("Group");
            var popupMessage = i18n.gettext("Group successfully");
            if (operation.action === "destroy") {popupMessage = popupMessage + " " + i18n.gettext("removed");}
            else if (operation.action === "update"){popupMessage = popupMessage + " " + i18n.gettext("updated");}
            else {var popupMessage = popupMessage + " " + i18n.gettext("added");}
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
        }
    }
});






