/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.accesscontrol.users.Users");
//</debug>
Ext.define("WPAKD.store.accesscontrol.users.Users", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.accesscontrol.users.Users",

//    autoLoad: true,
    autoSync: true,

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
            read:      "ACUsers.getUsers",
            create:    "ACUsers.addUser",
            destroy:   "ACUsers.removeUser",
            update:    "ACUsers.updateUser"
        }
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext("User");
            var popupMessage = i18n.gettext("User successfully");
            if (operation.action === "destroy") {popupMessage = popupMessage + " " + i18n.gettext("removed");}
            else if (operation.action === "update"){popupMessage = popupMessage + " " + i18n.gettext("updated");}
            else {var popupMessage = popupMessage + " " + i18n.gettext("added");}
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
            this.load();
        }
    }
});






