/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("WPAKD.Application", {
    extend: "Ext.app.Application",

    name: "WPAKD",

    views: [
        "WPAKD.view.Viewport"
        //, "WPAKD.view.desktop.icons.Main"
    ],

    controllers: [
        "desktop.ServerAvailability"

        // Disabling desktop icons, which are not critical for now
        //, "desktop.icons.Icons"

        , "desktop.BackgroundActivities"
        , "desktop.authentication.Authentication"
        , "desktop.authentication.ChangePassword"
        , "desktop.authentication.UserSettings"
        , "desktop.loading.Mask"
        , "desktop.loading.Stores"
        , "desktop.loading.SyncStores"
        , "desktop.notifications.NotificationsPopups"

        , "desktop.toolbar.Bottom"
        , "desktop.toolbar.Top"
        , "desktop.toolbar.Menu"

        , "desktop.sendemail.SendEmail"

        , "accesscontrol.AccessControl" // Manager Users, Groups, Companies & Sources
        , "accesscontrol.users.Users"
        , "accesscontrol.groups.Groups"
        , "accesscontrol.customers.Customers"
        , "accesscontrol.sources.Sources"

        , "sourcesconfiguration.SourcesConfiguration"
        , "sourcesconfiguration.capture.Capture"
        , "sourcesconfiguration.pictures.Pictures"
        , "sourcesconfiguration.videos.Videos"
        , "sourcesconfiguration.customvideos.Videos"
        , "sourcesconfiguration.postprod.PostProd"
        , "sourcesconfiguration.phidgets.Phidgets"
        , "sourcesconfiguration.advanced.Advanced"
        , "sourcesconfiguration.ftp.Ftp"

        , "pictures.Pictures"
        , "videos.Videos"

        , "logs.Logs"

        , "syncreports.SyncReports"
        , "xferreports.XferReports"
                
        , "alerts.Alerts"

        , "devices.Devices"

        , "stats.System"
        , "stats.Sources"

        , "systemconfiguration.SystemConfiguration"

    ],

    stores: [
        "desktop.StatefulConfiguration"
        , "desktop.authentication.UserSettings"
        
    ],

    launch: function() {
        console.log(new Date().toLocaleTimeString() + ": Application: launch()");

        // Warning to avoid having the user exiting the app by mistake (close, reload, back, forward ...)
        window.onbeforeunload = function(e) {return i18n.gettext("You are about to leave the application. You might loose some content. Are you sure ?");};

        // Register a remoting api to this application.
        //Ext.direct.Manager.addProvider(Ext_app_REMOTING_API);
        //Ext.direct.Manager.addProvider({"url":"router\/desktop","type":"remoting","actions":{"UserSettings":[{"name":"getSettings","len":1}],"DesktopStatefulConfiguration":[{"name":"getStatefulConfiguration","len":1},{"name":"addUpdateStatefulConfiguration","len":1},{"name":"removeStatefulConfiguration","len":1}],"Administrative":[{"name":"emptyAnswer","len":1},{"name":"getTimezones","len":1},{"name":"getUsbPorts","len":1},{"name":"getCameraModels","len":1},{"name":"getPhidgetsPorts","len":1},{"name":"getWatermarkFiles","len":1}],"Applications":[{"name":"getApplications","len":1}],"DesktopIcons":[{"name":"getDesktopAvailableIcons","len":1},{"name":"addDesktopAvailableIcons","len":1},{"name":"removeDesktopAvailableIcons","len":1},{"name":"updateDesktopAvailableIcons","len":1},{"name":"getDesktopCurrentIcons","len":1},{"name":"addDesktopCurrentIcons","len":1},{"name":"removeDesktopCurrentIcons","len":1},{"name":"updateDesktopCurrentIcons","len":1}],"Sources":[{"name":"getSources","len":1}],"SCCapture":[{"name":"getCapture","len":1},{"name":"updateCapture","len":1},{"name":"getSectionCapture","len":1}],"SCFTPServers":[{"name":"getFTPServers","len":1},{"name":"addFTPServer","len":1},{"name":"removeFTPServer","len":1},{"name":"updateFTPServer","len":1}],"SCVideo":[{"name":"getVideo","len":1},{"name":"updateVideo","len":1},{"name":"getSectionVideo","len":1}],"SCVideoCustom":[{"name":"getVideoCustom","len":1},{"name":"updateVideoCustom","len":1},{"name":"getSectionVideoCustom","len":1}],"SCVideoPost":[{"name":"getVideoPost","len":1},{"name":"updateVideoPost","len":1},{"name":"getSectionVideoPost","len":1}],"SCWindow":[{"name":"getConfigurationTabs","len":1}],"SCMisc":[{"name":"getWatermarkFiles","len":1},{"name":"getFonts","len":1},{"name":"getPhidgetSensors","len":1}],"ACGroups":[{"name":"getGroups","len":1},{"name":"addGroup","len":1},{"name":"removeGroup","len":1},{"name":"updateGroup","len":1},{"name":"getGroupAvailablePermissions","len":1},{"name":"addGroupAvailablePermissions","len":1},{"name":"removeGroupAvailablePermissions","len":1},{"name":"updateGroupAvailablePermissions","len":1},{"name":"getGroupCurrentPermissions","len":1},{"name":"addGroupCurrentPermissions","len":1},{"name":"removeGroupCurrentPermissions","len":1},{"name":"updateGroupCurrentPermissions","len":1},{"name":"getGroupAvailableApplications","len":1},{"name":"addGroupAvailableApplications","len":1},{"name":"removeGroupAvailableApplications","len":1},{"name":"updateGroupAvailableApplications","len":1},{"name":"getGroupCurrentApplications","len":1},{"name":"addGroupCurrentApplications","len":1},{"name":"removeGroupCurrentApplications","len":1},{"name":"updateGroupCurrentApplications","len":1}],"ACCustomers":[{"name":"getCustomers","len":1},{"name":"addCustomer","len":1},{"name":"removeCustomer","len":1},{"name":"updateCustomer","len":1}],"ACUsers":[{"name":"getUsers","len":1},{"name":"addUser","len":1},{"name":"removeUser","len":1},{"name":"updateUser","len":1},{"name":"getUserAvailableSources","len":1},{"name":"addUserAvailableSources","len":1},{"name":"removeUserAvailableSources","len":1},{"name":"updateUserAvailableSources","len":1},{"name":"getUserCurrentSources","len":1},{"name":"addUserCurrentSources","len":1},{"name":"removeUserCurrentSources","len":1},{"name":"updateUserCurrentSources","len":1},{"name":"getUserAvailablePermissions","len":1},{"name":"addUserAvailablePermissions","len":1},{"name":"removeUserAvailablePermissions","len":1},{"name":"updateUserAvailablePermissions","len":1},{"name":"getUserCurrentPermissions","len":1},{"name":"addUserCurrentPermissions","len":1},{"name":"removeUserCurrentPermissions","len":1},{"name":"updateUserCurrentPermissions","len":1},{"name":"getUserAvailableApplications","len":1},{"name":"addUserAvailableApplications","len":1},{"name":"removeUserAvailableApplications","len":1},{"name":"updateUserAvailableApplications","len":1},{"name":"getUserCurrentApplications","len":1},{"name":"addUserCurrentApplications","len":1},{"name":"removeUserCurrentApplications","len":1},{"name":"updateUserCurrentApplications","len":1},{"name":"changePassword","len":1}],"ACSources":[{"name":"getSources","len":1},{"name":"addSource","len":1},{"name":"removeSource","len":1},{"name":"updateSource","len":1},{"name":"getSourceAvailableUsers","len":1},{"name":"addSourceAvailableUsers","len":1},{"name":"removeSourceAvailableUsers","len":1},{"name":"updateSourceAvailableUsers","len":1},{"name":"getSourceCurrentUsers","len":1},{"name":"addSourceCurrentUsers","len":1},{"name":"removeSourceCurrentUsers","len":1},{"name":"updateSourceCurrentUsers","len":1}]}});

        // custom Vtype for vtype:"username"
        usernameTest = /^[a-zA-Z0-9\_\-_]+$/,
        Ext.apply(Ext.form.field.VTypes, {
            //  vtype validation function
            username: function(val, field) {
                return usernameTest.test(val);
            },
            // vtype Text property: The error text to display when the validation function returns false
            usernameText: i18n.gettext("Username is not valid. <br />  Can only contain letters, numbers, - and _"),
            // vtype Mask property: The keystroke filter mask
            usernameMask: /[a-z0-9_\-\_]/i
        });

        // Override filesize function
        Ext.util.Format.fileSize = function(size) {
            var byteLimit = 1000,
                kbLimit = 1000000,
                mbLimit = 1000000000,
                tbLimit = 1000000000000;
                
                var out;
                if (size < byteLimit) {
                    if (size === 1) {
                        out = "1 byte";
                    } else {
                        out = size + " bytes";
                    }
                } else if (size < kbLimit) {
                    out = (Math.round(((size*10) / byteLimit))/10) + " KB";
                } else if (size < mbLimit) {
                    out = (Math.round(((size*10) / kbLimit))/10) + " MB";
                } else if (size < tbLimit) {
                    out = (Math.round(((size*10) / mbLimit))/10) + " GB";
                } else {
                    out = (Math.round(((size*10) / tbLimit))/10) + " TB";
                }
                return out;
        };      

        //Disable backspace when used outside of a text field
        Ext.EventManager.addListener(Ext.getBody(), "keydown", function(e){
              if((e.getTarget().type != "text"&& e.getTarget().type != "textarea" && e.getTarget().type != "password") && e.getKey() == "8" ){
                    e.preventDefault();
              }
         });

        Ext.setGlyphFontFamily("FontAwesome");

        // Used to enable Tooltip
        Ext.tip.QuickTipManager.init();

        //Global error Handling
        Ext.Error.handle = function(err) {
            Ext.MessageBox.show({
                title: err.title,
                msg: err.msg,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }

        Ext.getBody().mask("Please wait, starting application ...");

        //Setting initial stores extraParams
        this.getDesktopAuthenticationUserSettingsStore().getProxy().setExtraParam("SENCHA_APP", "WPAKD");
        this.getDesktopStatefulConfigurationStore().getProxy().setExtraParam("SENCHA_APP", "WPAKD");

        // Loading stateful configurations
        this.getDesktopStatefulConfigurationStore().on("load",this.launchApp,this,{single:true});
        this.getDesktopStatefulConfigurationStore().load();
    },

    launchApp: function() {
        console.log(new Date().toLocaleTimeString() + ": Application: launchApp()");

        Ext.state.Manager.setProvider(
            Ext.create("WPAKD.util.JsonPStorageProvider", {})
        );

        Ext.create("WPAKD.view.Viewport");
    },

    onAppUpdate: function () {
        Ext.Msg.confirm("Application Update", "This application has an update, reload?",
            function (choice) {
                if (choice === "yes") {
                    window.location.reload();
                }
            }
        );
    }
});
