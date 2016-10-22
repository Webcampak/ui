/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.notifications.NotificationsPopups");
//</debug>
Ext.define("WPAKD.controller.desktop.notifications.NotificationsPopups", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [

    ]

    , refs: [

    ]

    , init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Notifications->NotificationsPopups: Controller init: function()");
        this.control({

        });
        this.listen({
            controller: {
                  "*": {"WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification": this.displayNotification}
            }
            , store: {
                  "*": {"WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification": this.displayNotification}
            }
        });
    }

    , onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Notifications->NotificationsPopups: onLaunch()");

    }

    , displayNotification: function(popupTitle, popupMessage) {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Notifications->NotificationsPopups: displayNotification()");
        //Ext.customPopup.msg(Ext.String.format(popupTitle), Ext.String.format(popupMessage));
        if (!Date.now) {
             Date.now = function() { return new Date().getTime(); };
        }
        if (this.lastNotificationDate != undefined && this.previousNotification != undefined) {
            var displayPopup = true;
            if (window.btoa(popupTitle + popupMessage) != this.previousNotification) {
                displayPopup = true;
            } else {
                if (Date.now() - this.lastNotificationDate < 3000) { //Time in miliseconds
                    displayPopup = false;
                } else {
                    displayPopup = true;
                }
            }
        } else {
            displayPopup = true;
        }
        this.lastNotificationDate = Date.now();
        this.previousNotification = window.btoa(popupTitle + popupMessage);
        if (displayPopup == true) {
//            Ext.customPopup.msg(Ext.String.format(popupTitle), Ext.String.format(popupMessage));
            var notificationPopup = Ext.create("widget.uxnotification", {
                                                        title: popupTitle,
                                                        position: "tr",
                                                        manager: "instructions",
                                                        cls: "ux-notification-light",
                                                        iconCls: "ux-notification-icon-information",
                                                        html: popupMessage,
                                                        autoCloseDelay: 4000,
                                                        slideBackDuration: 500,
                                                        slideInAnimation: "bounceOut",
                                                        slideBackAnimation: "easeIn"
                                                    });
            notificationPopup.show();
            notificationPopup.toFront();
            notificationPopup.destroy();
        }
    }
});