/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.Application");
//</debug>
Ext.define("WPAKT.Application", {
    extend: "Ext.app.Application"
    
    , name: "WPAKT"

    , paths: {
        "Ext.ux": "/ext/packages/ux/classic/src/"
    }

    , stores: [

    ]
    
    , controllers: [
        "core.Startup"
        , "core.Router"
        , "core.Navigation"
        , "core.ServerAvailability"
        , "core.BackgroundActivities"
        , "core.Skeleton"
        , "core.Email"
        , "core.authentication.Authentication"
        , "core.authentication.ResetPassword"
        , "core.authentication.ChangePassword"
        , "core.authentication.UserSettings"
        , "core.authentication.Profile"
        , "core.loading.Mask"
        , "core.loading.Stores"
        , "core.loading.SyncStores"
        , "dashboard.Uptime"
        , "dashboard.Disk"
        , "dashboard.Cameras"
        , "dashboard.Dashboard"
//        , "dashboard.CaptureStats"
//        , "dashboard.LastPictures"
        , "dashboard.SourcesStatus"
        , "dashboard.Status"
        , "pictures.Pictures"
        , "videos.Videos"
        , "config.Config"
    ]    
  
    , defaultToken : "dashboard"
    
    , listen : {
        controller : {
            "#" : {
                unmatchedroute : "onUnmatchedRoute"
            }
        }
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Application: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , onUnmatchedRoute : function(hash) {
        this.consoleLog("onUnmatchedRoute() - This route cannot be resolved: " + hash);
    }    
    
    , launch: function () {
        // Warning to avoid having the user exiting the app by mistake (close, reload, back, forward ...)
        window.onbeforeunload = function(e) {return i18n.gettext("You are about to leave the application. You might loose some content. Are you sure ?");};

        // custom Vtype for vtype:"username"
        var usernameTest = /^[a-zA-Z0-9\_\-_]+$/;
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
              if((e.getTarget().type != "text"&& e.getTarget().type != "textarea" && e.getTarget().type != "password") && e.getKey() === "8" ){
                    e.preventDefault();
              }
         });
        
        //Global error Handling
        Ext.Error.handle = function(err) {
            Ext.MessageBox.show({
                title: err.title,
                msg: err.msg,
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }        
    }

    , onAppUpdate: function () {
        Ext.Msg.confirm("Application Update", "This application has an update, reload?",
            function (choice) {
                if (choice === "yes") {
                    window.location.reload();
                }
            }
        );
    }
});

