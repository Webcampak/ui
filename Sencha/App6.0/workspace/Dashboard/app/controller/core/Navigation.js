/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.Navigation");
//</debug>
Ext.define("WPAKT.controller.core.Navigation", {
    extend: "Ext.app.Controller"

    , stores: [
        "core.Sources"
        , "core.Applications"
    ]

    , models: [
        "core.Sources"
        , "core.Applications"
    ]

    , views: [
        "core.Main"
        , "core.skeleton.tree.Main"
    ]

    , refs: [
        {ref: "coremain",               selector: "coremain",               autoCreate: true,   xtype: "coremain"    }
        , {ref: "coreskeletontreemain", selector: "coreskeletontreemain"    }
        
    ]
    
    , init: function() {
        this.consoleLog("init()");
        this.control({

        });        
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.core.Navigation.loadNavigation":          this.loadNavigation
                    , "WPAKT.controller.core.Navigation.buildNavigationMenu":   this.buildNavigationMenu
                  }
             }
        });     
        
    }

    , onLaunch: function() {

    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Core->Navigation: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }
    
    , loadNavigation: function() {
        this.consoleLog("loadNavigation()");
        
        if (this.getCoreSourcesStore().getTotalCount() === 0) {
            var requiredStores = [];        
            requiredStores.push({store: this.getCoreApplicationsStore(),    action: "REFRESH"});
            requiredStores.push({store: this.getCoreSourcesStore(),         action: "REFRESH"});
            this.fireEvent("WPAKT.controller.core.loading.Stores.beginLoading"
                , "WEB_DASH_NAVIGATION"
                , "WPAKT.controller.core.Navigation.buildNavigationMenu"
                , requiredStores);            
        }
    }
    
    , buildNavigationMenu: function() {
        this.consoleLog("buildNavigationMenu()");
        var navigationStore = this.getCoreskeletontreemain().getStore();
        var storeDashboardRecord = {
            text:   i18n.gettext("Dashboard")
            , view:   "core.Dashboard"
            , leaf:   true
            , iconCls: "x-fa fa-desktop"
            , routeId: "dashboard"
        };
        var storePicturesRecord = {};
        if (this.getCoreApplicationsStore().findRecord("CODE", "WEB_DSP_PICTURES", 0, false, false, true) !== null) {
            var pictureSources = [];
            this.getCoreSourcesStore().each(function (rec) {
                var pictureIconCls = "x-fa fa-camera-retro";
                if (rec.get("REMOTE_HOST") !== "" && rec.get("REMOTE_HOST") !== "127.0.0.1") {
                    pictureIconCls = "right-icon rem-icon x-fa fa-camera-retro";
                }
                pictureSources.push({
                    text: rec.get("NAME")
                    , view: "pages.BlankPage"
                    , leaf: true
                    , iconCls: pictureIconCls
                    , routeId:"pictures/" + rec.get("SOURCEID")
                });
            });
            if (pictureSources.length > 0) {
                storePicturesRecord = {
                    text:   i18n.gettext("Pictures")
                    , expanded: false
                    , selectable: false
                    , iconCls: "x-fa fa-camera-retro"
                    , children: pictureSources
                };
            }
        }
        var storeVideosRecord = {};
        if (this.getCoreApplicationsStore().findRecord("CODE", "WEB_DSP_VIDEOS", 0, false, false, true) !== null) {
            var storeVideosRecord = {};
            var videoSources = [];
            this.getCoreSourcesStore().each(function (rec) {
                var videoIconCls = "x-fa fa-video-camera";
                if (rec.get("REMOTE_HOST") !== "" && rec.get("REMOTE_HOST") !== "127.0.0.1") {
                    videoIconCls = "right-icon rem-icon x-fa fa-video-camera";
                }
                videoSources.push({
                    text: rec.get("NAME")
                    , view: "pages.BlankPage"
                    , leaf: true
                    , iconCls: videoIconCls
                    , routeId:"videos/" + rec.get("SOURCEID")
                });
            });
            if (videoSources.length > 0) {
                storeVideosRecord = {
                    text:   i18n.gettext("Videos")
                    , expanded: false
                    , selectable: false
                    , iconCls: "x-fa fa-video-camera"
                    , children: videoSources
                };
            }
        }
        var storeConfigRecord = {};
        if (this.getCoreApplicationsStore().findRecord("CODE", "WEB_CFG_SOURCES", 0, false, false, true) !== null) {
            var configSources = [];
            this.getCoreSourcesStore().each(function (rec) {
                var configIconCls = "x-fa fa-cogs";
                if (rec.get("REMOTE_HOST") !== "" && rec.get("REMOTE_HOST") !== "127.0.0.1") {
                    var configIconCls = "left-icon rem-icon x-fa fa-cogs";
                }
                configSources.push({
                    text: rec.get("NAME")
                    , view: "pages.BlankPage"
                    , leaf: true
                    , iconCls: configIconCls
                    , routeId:"config/" + rec.get("SOURCEID")
                });
            });
            if (configSources.length > 0) {
                var storeConfigRecord = {
                    text:   i18n.gettext("Config")
                    , expanded: false
                    , selectable: false
                    , iconCls: "x-fa fa-cogs"
                    , children: configSources
                };
            }
        }
        
        var storeRecords = {
            expanded: true,
            children: [
                storeDashboardRecord
                , storePicturesRecord
                , storeVideosRecord
                , storeConfigRecord
            ]
        };
        navigationStore.setRoot(storeRecords);        
    }
});