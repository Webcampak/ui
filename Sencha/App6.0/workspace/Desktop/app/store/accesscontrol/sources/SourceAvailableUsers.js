/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.accesscontrol.sources.SourceAvailableUsers");
//</debug>
Ext.define("WPAKD.store.accesscontrol.sources.SourceAvailableUsers", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.accesscontrol.sources.SourceAvailableUsers",

    autoSync: true,

    proxy:{
        type: "direct",
        extraParams: {
            SOU_ID: "0"
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
            read:        "ACSources.getSourceAvailableUsers",
            create:    "ACSources.addSourceAvailableUsers",
            destroy:    "ACSources.removeSourceAvailableUsers",
            update:    "ACSources.updateSourceAvailableUsers"
        },
	listeners: {
            exception: function() {
                var currentStore = Ext.getStore("accesscontrol.users.UserCurrentSources");
                currentStore.fireEvent("WPAKD.controller.accesscontrol.sources.Sources.reloadUsers");
            }
	}
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext("Source");
            var popupMessage = i18n.gettext("Source modification performed");
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
            this.fireEvent("WPAKD.controller.accesscontrol.sources.Sources.reloadSharedSources");
            this.load();
            Ext.getStore("accesscontrol.sources.SourceCurrentUsers").load();
        }
    }
});






