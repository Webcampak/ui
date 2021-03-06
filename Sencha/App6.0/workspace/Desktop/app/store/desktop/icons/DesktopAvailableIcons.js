/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.icons.DesktopAvailableIcons");
//</debug>
Ext.define("WPAKD.store.desktop.icons.DesktopAvailableIcons", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.icons.DesktopAvailableIcons",

//    autoSync: true,

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
            read:      "DesktopIcons.getDesktopAvailableIcons",
            create:    "DesktopIcons.addDesktopAvailableIcons",
            destroy:   "DesktopIcons.removeDesktopAvailableIcons",
            update:    "DesktopIcons.updateDesktopAvailableIcons"
        }
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext("Icon");
            var popupMessage = i18n.gettext("Icon modification performed");
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
        }
    }
});






