/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.accesscontrol.users.UserCurrentApplications");
//</debug>
Ext.define("WPAKD.store.accesscontrol.users.UserCurrentApplications", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.accesscontrol.users.UserCurrentApplications",

//    autoLoad: true,
    autoSync: true,

    proxy:{
        type: "direct",
        extraParams: {
            USE_ID: "0"
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read:        "ACUsers.getUserCurrentApplications",
            create:    "ACUsers.addUserCurrentApplications",
            destroy:    "ACUsers.removeUserCurrentApplications",
            update:    "ACUsers.updateUserCurrentApplications"
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
        } */
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext("User");
            var popupMessage = i18n.gettext("Modification performed");
            this.fireEvent("WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification", popupTitle, popupMessage);
            this.load();
        }
    }
});






