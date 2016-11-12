/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.icons.DesktopCurrentIcons");
//</debug>
Ext.define("WPAKD.store.desktop.icons.DesktopCurrentIcons", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.icons.DesktopCurrentIcons",

    autoLoad: true,
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
            read:      "DesktopIcons.getDesktopCurrentIcons",
            create:    "DesktopIcons.addDesktopCurrentIcons",
            destroy:   "DesktopIcons.removeDesktopCurrentIcons",
            update:    "DesktopIcons.updateDesktopCurrentIcons"
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
