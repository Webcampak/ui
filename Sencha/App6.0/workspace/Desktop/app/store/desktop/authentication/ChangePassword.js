/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.authentication.ChangePassword");
//</debug>
Ext.define("WPAKD.store.desktop.authentication.ChangePassword", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.authentication.ChangePassword",

//    autoLoad: true,
    autoSync: true,

    proxy:{
        type: "direct",
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            create:    "ChangePassword.changePassword"
            , read:    "Administrative.emptyAnswer"
        }/*,
        afterRequest:function(request,success){
            if (success === false) {
                if (request.operation.error) {var errorMsg = request.operation.error;}
                else {var errorMsg = "Unknown Error";}
                Ext.MessageBox.show({
                    title: "Error",
                    msg: errorMsg,
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                });
                //this.load();
            }
        }*/
    },
    listeners: {
        write: function(store, operation) {
            var popupTitle = i18n.gettext("Password");
            var popupMessage = i18n.gettext("Password successfully");
            if (operation.action === "destroy") {var popupMessage = popupMessage + " " + i18n.gettext("removed");}
            else if (operation.action === "update"){var popupMessage = popupMessage + " " + i18n.gettext("updated");}
            else {var popupMessage = popupMessage + " " + i18n.gettext("updated");}
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
            this.load();
        }
    }
});






