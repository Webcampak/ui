/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.toolbar.Menu");
//</debug>
Ext.define("WPAKD.controller.desktop.toolbar.Menu", {
    extend: "Ext.app.Controller",

    stores: [
        "shared.Applications"
        , "shared.CurrentApplications"
    ],

    models: [
        "shared.Applications"

    ],

    views: [
        "desktop.Main"

        , "desktop.toolbar.top.Menu"
        , "desktop.toolbar.top.menu.Main"
        , "desktop.toolbar.top.menu.Pictures"
        , "desktop.toolbar.top.menu.Videos"
        , "desktop.toolbar.top.menu.stats.Main"
        , "desktop.toolbar.top.menu.stats.Sources"
        , "desktop.toolbar.top.menu.stats.System"
        , "desktop.toolbar.top.menu.config.Main"
        , "desktop.toolbar.top.menu.config.Sources"
        , "desktop.toolbar.top.menu.config.Devices"
        , "desktop.toolbar.top.menu.config.AccessControl"
        , "desktop.toolbar.top.menu.config.System"
        , "desktop.toolbar.top.menu.config.Alerts"
        , "desktop.toolbar.top.menu.config.SyncReports"
        , "desktop.toolbar.top.menu.config.XferReports"
        , "desktop.toolbar.top.menu.Logs"

    ],

    refs: [
        {ref: "desktopmain",                                selector: "desktopmain"                             }

        , {ref: "desktoptoolbartopmenumain",                selector: "desktoptoolbartopmenumain"               , autoCreate: true,   xtype: "desktoptoolbartopmenumain"      }
        , {ref: "desktoptoolbartopmenupictures",            selector: "desktoptoolbartopmenupictures"           , autoCreate: true,   xtype: "desktoptoolbartopmenupictures"  }
        , {ref: "desktoptoolbartopmenuvideos",              selector: "desktoptoolbartopmenuvideos"             , autoCreate: true,   xtype: "desktoptoolbartopmenuvideos"    }
        , {ref: "desktoptoolbartopmenustatsmain",           selector: "desktoptoolbartopmenustatsmain"          , autoCreate: true,   xtype: "desktoptoolbartopmenustatsmain" }
        , {ref: "desktoptoolbartopmenustatssources",        selector: "desktoptoolbartopmenustatssources"       }
        , {ref: "desktoptoolbartopmenustatssystem",         selector: "desktoptoolbartopmenustatssystem"        }
        , {ref: "desktoptoolbartopmenuconfigmain",          selector: "desktoptoolbartopmenuconfigmain"         }
        , {ref: "desktoptoolbartopmenuconfigsources",       selector: "desktoptoolbartopmenuconfigsources"      }
        , {ref: "desktoptoolbartopmenuconfigaccesscontrol", selector: "desktoptoolbartopmenuconfigaccesscontrol"}
        , {ref: "desktoptoolbartopmenuconfigsystem",        selector: "desktoptoolbartopmenuconfigsystem"       }
        , {ref: "desktoptoolbartopmenuconfigdevices",       selector: "desktoptoolbartopmenuconfigdevices"      }
        , {ref: "desktoptoolbartopmenuconfigalerts",        selector: "desktoptoolbartopmenuconfigalerts"       }
        , {ref: "desktoptoolbartopmenuconfigsyncreports",   selector: "desktoptoolbartopmenuconfigsyncreports"  }
        , {ref: "desktoptoolbartopmenuconfigxferreports",   selector: "desktoptoolbartopmenuconfigxferreports"  }
        , {ref: "desktoptoolbartopmenulogs",                selector: "desktoptoolbartopmenulogs"               }

    ],

    init: function() {
        this.consoleLog("init()");
        this.control({

        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.desktop.menu.Menu.refreshMenu":     this.refreshMenu
                      , "WPAKD.controller.desktop.menu.Menu.reloadMenus":     this.reloadMenus

                  }
            }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
        var requiredStores = [];

        requiredStores.push({store: this.getSharedCurrentApplicationsStore(),   action: "LOAD"});
        requiredStores.push({store: this.getSharedApplicationsStore(),          action: "LOAD"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "LOAD_MENUS"
            , "WPAKD.controller.desktop.menu.Menu.refreshMenu"
            , requiredStores);
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Menu->Menu: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , hideAllMenus: function() {
        this.consoleLog("hideAllMenus()");
        this.getDesktoptoolbartopmenustatsmain().setVisible(false);
        this.getDesktoptoolbartopmenuconfigmain().setVisible(false);
        this.getDesktoptoolbartopmenupictures().setVisible(false);
        this.getDesktoptoolbartopmenuvideos().setVisible(false);
        this.getDesktoptoolbartopmenustatssources().setVisible(false);
        this.getDesktoptoolbartopmenustatssystem().setVisible(false);
        this.getDesktoptoolbartopmenuconfigaccesscontrol().setVisible(false);
        this.getDesktoptoolbartopmenuconfigsources().setVisible(false);
        this.getDesktoptoolbartopmenuconfigsystem().setVisible(false);
        this.getDesktoptoolbartopmenuconfigdevices().setVisible(false);
        this.getDesktoptoolbartopmenuconfigalerts().setVisible(false);
        this.getDesktoptoolbartopmenulogs().setVisible(false);
    }

    , reloadMenus: function() {
        this.consoleLog("reloadMenus()");
        var requiredStores = [];

        requiredStores.push({store: this.getSharedCurrentApplicationsStore(),   action: "LOAD"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "LOAD_MENUS"
            , "WPAKD.controller.desktop.menu.Menu.refreshMenu"
            , requiredStores);
    }

    , refreshMenu: function() {
        this.consoleLog("refreshMenu()");
        this.hideAllMenus();
        var scope = this;
        //By default we hide main menu sections, the first subsection to be displayed with actually enable the main menu section.
        this.getDesktoptoolbartopmenustatsmain().setVisible(false);
        this.getDesktoptoolbartopmenuconfigmain().setVisible(false);
        this.getSharedApplicationsStore().each(function(r){
            var currentCode = r.get("CODE");
            scope.consoleLog("refreshMenu(): Application: " + currentCode);
            var record = scope.getSharedCurrentApplicationsStore().findRecord("CODE", currentCode, 0, false, false, true);
            if (record) {
                scope.consoleLog("refreshMenu(): Current Application: " + record.get("CODE"));
            }
            if (currentCode === "WEB_DSP_PICTURES") {
                if (record) { scope.getDesktoptoolbartopmenupictures().setVisible(true);}
                else {scope.getDesktoptoolbartopmenupictures().setVisible(false);}
            } else if (currentCode === "WEB_DSP_VIDEOS") {
                if (record) {scope.getDesktoptoolbartopmenuvideos().setVisible(true);}
                else {scope.getDesktoptoolbartopmenuvideos().setVisible(false);}
            } else if (currentCode === "WEB_DSP_STATS_SOURCES") {
                if (record) {
                    scope.getDesktoptoolbartopmenustatssources().setVisible(true);
                    scope.getDesktoptoolbartopmenustatsmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenustatssources().setVisible(false);}
            } else if (currentCode === "WEB_DSP_STATS_SYSTEM") {
                if (record) {
                    scope.getDesktoptoolbartopmenustatssystem().setVisible(true);
                    scope.getDesktoptoolbartopmenustatsmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenustatssystem().setVisible(false);}
            } else if (currentCode === "WEB_CFG_ACCESSCONTROL") {
                if (record) {
                    scope.getDesktoptoolbartopmenuconfigaccesscontrol().setVisible(true);
                    scope.getDesktoptoolbartopmenuconfigmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenuconfigaccesscontrol().setVisible(false);}
            } else if (currentCode === "WEB_CFG_SOURCES") {
                if (record) {
                    scope.getDesktoptoolbartopmenuconfigsources().setVisible(true);
                    scope.getDesktoptoolbartopmenuconfigmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenuconfigsources().setVisible(false);}
            } else if (currentCode === "WEB_CFG_SYSTEM") {
                if (record) {
                    scope.getDesktoptoolbartopmenuconfigsystem().setVisible(true);
                    scope.getDesktoptoolbartopmenuconfigmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenuconfigsystem().setVisible(false);}
            } else if (currentCode === "WEB_CFG_ALERTS") {
                if (record) {
                    scope.getDesktoptoolbartopmenuconfigalerts().setVisible(true);
                    scope.getDesktoptoolbartopmenuconfigmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenuconfigalerts().setVisible(false);}                
            } else if (currentCode === "WEB_DSP_DEVICES") {
                if (record) {
                    scope.getDesktoptoolbartopmenuconfigdevices().setVisible(true);
                    scope.getDesktoptoolbartopmenuconfigmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenuconfigdevices().setVisible(false);}
            } else if (currentCode === "WEB_DSP_LOGS") {
                if (record) {
                    scope.getDesktoptoolbartopmenulogs().setVisible(true);
                    scope.getDesktoptoolbartopmenuconfigmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenulogs().setVisible(false);}
            } else if (currentCode === "WEB_DSP_SYNCREPORTS") {
                if (record) {
                    scope.getDesktoptoolbartopmenuconfigsyncreports().setVisible(true);
                    scope.getDesktoptoolbartopmenustatsmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenuconfigsyncreports().setVisible(false);}
            } else if (currentCode === "WEB_DSP_XFERREPORTS") {
                if (record) {
                    scope.getDesktoptoolbartopmenuconfigxferreports().setVisible(true);
                    scope.getDesktoptoolbartopmenustatsmain().setVisible(true);
                }
                else {scope.getDesktoptoolbartopmenuconfigxferreports().setVisible(false);}
            }
        });
    }
});