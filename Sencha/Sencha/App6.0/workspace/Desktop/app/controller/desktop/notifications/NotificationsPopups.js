//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.desktop.notifications.NotificationsPopups');
//</debug>
Ext.define('WPAKD.controller.desktop.notifications.NotificationsPopups', {
    extend: 'Ext.app.Controller',

    stores: [

    ],

    models: [

    ],

    views: [
//        'desktop.Main'
//        , 'desktop.toolbar.Main'
    ],

    refs: [
//        {ref: 'desktopmain',              selector: 'desktopmain'                      }
//        , {ref: 'desktoptoolbarmain',  selector: 'desktoptoolbarmain'             }
//        , {ref: 'uxnotification',        selector: 'uxnotification',  autoCreate: true,        xtype: 'uxnotification'}
    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Notifications->NotificationsPopups: Controller init: function()');
        this.control({

        });
        this.listen({
            controller: {
                  '*': {'WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification': this.displayNotification}
            },
            store: {
                  '*': {'WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification': this.displayNotification}
            }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Notifications->NotificationsPopups: onLaunch()');

    },

    displayNotification: function(popupTitle, popupMessage) {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Notifications->NotificationsPopups: displayNotification()');
        //Ext.customPopup.msg(Ext.String.format(popupTitle), Ext.String.format(popupMessage));
        if (!Date.now) {
             Date.now = function() { return new Date().getTime(); };
        }
        if (this.lastNotificationDate != undefined && this.previousNotification != undefined) {
            if (window.btoa(popupTitle + popupMessage) != this.previousNotification) {
                var displayPopup = true;
            } else {
                if (Date.now() - this.lastNotificationDate < 3000) { //Time in miliseconds
                    var displayPopup = false;
                } else {
                    var displayPopup = true;
                }
            }
        } else {
            var displayPopup = true;
        }
        this.lastNotificationDate = Date.now();
        this.previousNotification = window.btoa(popupTitle + popupMessage);
        if (displayPopup == true) {
//            Ext.customPopup.msg(Ext.String.format(popupTitle), Ext.String.format(popupMessage));
            var notificationPopup = Ext.create('widget.uxnotification', {
                                                        title: popupTitle,
                                                        position: 'tr',
                                                        manager: 'instructions',
                                                        cls: 'ux-notification-light',
                                                        iconCls: 'ux-notification-icon-information',
                                                        html: popupMessage,
                                                        autoCloseDelay: 4000,
                                                        slideBackDuration: 500,
                                                        slideInAnimation: 'bounceOut',
                                                        slideBackAnimation: 'easeIn'
                                                    });
            notificationPopup.show();
            notificationPopup.toFront();
            notificationPopup.destroy();
        }
    }
});