/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.accesscontrol.users.UserCurrentSources");
//</debug>
Ext.define("WPAKD.store.accesscontrol.users.UserCurrentSources", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.accesscontrol.users.UserCurrentSources",

    autoSync: true,

    proxy: {
        type: "direct",
        writer: {
            writeAllFields: true
        },
        extraParams: {
            USE_ID: "0"
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api: {
            read: "ACUsers.getUserCurrentSources",
            create: "ACUsers.addUserCurrentSources",
            destroy: "ACUsers.removeUserCurrentSources",
            update: "ACUsers.updateUserCurrentSources"
        },
        listeners: {
            exception: function () {
                var currentStore = Ext.getStore("accesscontrol.users.UserCurrentSources");
                currentStore.fireEvent("WPAKD.controller.accesscontrol.users.ACUsers.reloadSources");
            }
        }
    },
    listeners: {
        write: function (store, operation) {
            var popupTitle = i18n.gettext("User");
            var popupMessage = i18n.gettext("Modification performed");
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
            this.fireEvent("WPAKD.controller.accesscontrol.sources.Sources.reloadSharedSources");
            this.load();
            Ext.getStore("accesscontrol.users.UserAvailableSources").load();
        }
    }
});






