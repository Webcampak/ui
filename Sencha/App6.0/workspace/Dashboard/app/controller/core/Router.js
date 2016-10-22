/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.Router");
//</debug>
Ext.define("WPAKT.controller.core.Router", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]


    , views: [
        "core.Main"
//        , "core.skeleton.card.default.Main"

    ]

    , refs: [
        {ref: "coremain",                       selector: "coremain",                       autoCreate: true,   xtype: "coremain"    }
//        , {ref: "coreskeletoncarddefaultmain",  selector: "coreskeletoncarddefaultmain",    autoCreate: true,   xtype: "coreskeletoncarddefaultmain"    }

    ]
/*    
    , routes: {
        "pictures/:id":             function(sourceid) {this.fireEvent("WPAKT.controller.pictures.Pictures.loadSource", sourceid);}
        , "auth/login":             function() {this.fireEvent("WPAKT.controller.core.authentication.Authentication.showLogin");}
        , "auth/changepassword":    function() {this.fireEvent("WPAKT.controller.core.authentication.ChangePassword.showChangePassword");}
        , "user/profile":           function() {this.fireEvent("WPAKT.controller.core.authentication.Profile.showProfileMenu");}
        , "auth/resetpassword":     function() {this.fireEvent("WPAKT.controller.core.authentication.ResetPassword.showResetPassword");}
        , "dashboard":              function() {this.fireEvent("WPAKT.controller.dashboard.Dashboard.showDashboard");}
    }
*/
    , routes: {
        "pictures/:id":             function(sourceid) {this.eventProxy("WPAKT.controller.pictures.Pictures.loadSource", sourceid);}
        , "videos/:id":             function(sourceid) {this.eventProxy("WPAKT.controller.videos.Videos.loadSource", sourceid);}
        , "config/:id":             function(sourceid) {this.eventProxy("WPAKT.controller.config.Config.loadSource", sourceid);}
        , "auth/login":             function() {this.fireEvent("WPAKT.controller.core.authentication.Authentication.showLogin");}
        , "auth/changepassword":    function() {this.fireEvent("WPAKT.controller.core.authentication.ChangePassword.showChangePassword");}
        , "user/profile":           function() {this.fireEvent("WPAKT.controller.core.authentication.Profile.showProfileMenu");}
        , "auth/resetpassword":     function() {this.fireEvent("WPAKT.controller.core.authentication.ResetPassword.showResetPassword");}
        , "dashboard":              function() {this.eventProxy("WPAKT.controller.dashboard.Dashboard.showDashboard", false);}
    }
    
    , init: function() {
        this.consoleLog("init()");
        
    }

    , onLaunch: function() {

    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Router: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }
    
    // This proxy is used to ensure the status store, with data, is populated before any page is loaded 
    , eventProxy: function(event, sourceid, init) {
        this.consoleLog("eventProxy(): " + event);
        var scope = this;
        var currentWindowHash = window.location.hash.replace("#","");
        if (currentWindowHash !== "auth/login") {
            if (this.fireEvent("WPAKT.controller.dashboard.Status.isLoadedAndAuthenticated") === true) {
                this.fireEvent("WPAKT.controller.core.Navigation.loadNavigation");
                this.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", this.getCoremain());
                this.fireEvent(event, sourceid)
            } else {            
                this.fireEvent("WPAKT.controller.core.loading.Mask.beginLoading", this.getCoremain(), "Loading initial data ...");
                if (init === true) {this.fireEvent("WPAKT.controller.dashboard.Status.loadStatus");} // Force load it this is the first time the event is fired
                setTimeout(function() {
                    scope.eventProxy(event, sourceid, false);
                },500);            
            }
        }
    }
});