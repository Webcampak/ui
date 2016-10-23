/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.authentication.ChangePassword");
//</debug>
Ext.define("WPAKD.store.desktop.authentication.ChangePassword", {
    extend: "Ext.data.Store"

    , model: "WPAKD.model.desktop.authentication.ChangePassword"

//    autoLoad: true,
    , autoSync: true

    , proxy:{
        type: "direct"
        , reader: {
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        }
        , api:{
            create:    "ChangePassword.changePassword"
            , read:    "Administrative.emptyAnswer"
        }
    }
    , listeners: {
        write: function(store, operation) {
            var popupTitle = i18n.gettext("Password");
            var popupMessage = i18n.gettext("Password successfully");
            if (operation.action === "destroy") {popupMessage = popupMessage + " " + i18n.gettext("removed");}
            else if (operation.action === "update"){popupMessage = popupMessage + " " + i18n.gettext("updated");}
            else {popupMessage = popupMessage + " " + i18n.gettext("updated");}
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
            this.load();
        }
    }
});






