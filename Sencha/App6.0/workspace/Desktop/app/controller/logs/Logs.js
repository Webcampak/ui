/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.logs.Logs");
//</debug>
Ext.define("WPAKD.controller.logs.Logs", {
    extend: "Ext.app.Controller",

    views: [
        "desktop.toolbar.top.Taskbar"
        , "logs.Main"
        , "logs.SourcesList"
        , "logs.Logs"
        , "logs.ButtonRefresh"
        , "logs.SourceName"

        , "logs.capture.Main"
        , "logs.capture.CaptureLogs"
        , "logs.customvideos.Main"
        , "logs.customvideos.CustomVideosLogs"
        , "logs.postprod.Main"
        , "logs.postprod.PostprodLogs"
        , "logs.videos.Main"
        , "logs.videos.VideosLogs"
        , "logs.configuration.Main"
        , "logs.configuration.ConfigurationLogs"
    ],

    stores: [
        "shared.Sources"

        , "logs.Capture"
        , "logs.CustomVideos"
        , "logs.Postprod"
        , "logs.Videos"
        , "logs.Configuration"
    ],

    models: [
        "shared.Sources"

        , "logs.Capture"
        , "logs.CustomVideos"
        , "logs.Postprod"
        , "logs.Videos"
        , "logs.Configuration"
    ],

    refs: [
        {ref: "desktopmain",                selector: "desktopmain"                 }
        , {ref: "desktoptoolbartoptaskbar", selector: "desktoptoolbartoptaskbar"    }

        , {ref: "logsmain",                         selector: "logsmain",           autoCreate: true,   xtype: "logsmain"}
        , {ref: "logssourceslist",                  selector: "logssourceslist"     }
        , {ref: "logslogs",                         selector: "logslogs"            }
        , {ref: "logsbuttonrefresh",                selector: "logsbuttonrefresh"   }
        , {ref: "logssourcename",                   selector: "logssourcename"      }

        , {ref: "logscapturemain",                      selector: "logscapturemain"                         }
        , {ref: "logscapturecapturelogs",               selector: "logscapturecapturelogs"                  }
        , {ref: "logscustomvideosmain",                 selector: "logscustomvideosmain"                    }
        , {ref: "logscustomvideoscustomvideoslogs",     selector: "logscustomvideoscustomvideoslogs"        }
        , {ref: "logspostprodmain",                     selector: "logspostprodmain"                        }
        , {ref: "logspostprodpostprodlogs",             selector: "logspostprodpostprodlogs"                }
        , {ref: "logsvideosmain",                       selector: "logsvideosmain"                          }
        , {ref: "logsvideosvideoslogs",                 selector: "logsvideosvideoslogs"                    }
        , {ref: "logsconfigurationmain",                selector: "logsconfigurationmain"                   }
        , {ref: "logsconfigurationconfigurationlogs",   selector: "logsconfigurationconfigurationlogs"      }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Logs: Controller init: function()");
        this.control({
            "desktoptoolbartoptaskbar button[action=openWEB_DSP_LOGS]":     {click:  this.openLogs                              }
            , "logsmain":                                   {hide:   this.closeLogs, minimize: this.openLogs    }
            , "#menuOpenWEB_DSP_LOGS":                      {click:  this.menuOpenLogs                          }

            , "logssourceslist":                            {selectionchange:   this.onSourceSelected}
            , "logsbuttonrefresh":                          {click:   this.reloadLogs}
            //, "logslogs":                                   {tabchange:  this.changeActiveTab          }
        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.logs.Logs.openLogs":            this.openLogs
                      , "WPAKD.controller.logs.Logs.menuOpenLogs":      this.menuOpenLogs
                      , "WPAKD.controller.logs.Logs.closeLogsDetails":  this.closeLogsDetails
                      , "WPAKD.controller.logs.Logs.loadSourceLogs":    this.loadSourceLogs
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Logs: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , reloadLogs: function() {
        this.consoleLog("reloadLogs()");
        var activeTab = this.getLogslogs().getActiveTab();
        if (activeTab.xtype === "logscapturemain") {
            this.getLogsCaptureStore().load();
        } else if (activeTab.xtype === "logsvideosmain") {
            this.getLogsVideosStore().load();
        } else if (activeTab.xtype === "logscustomvideosmain") {
            this.getLogsCustomVideosStore().load();
        } else if (activeTab.xtype === "logspostprodmain") {
            this.getLogsPostprodStore().load();
        } else if (activeTab.xtype === "logsconfigurationmain") {
            this.getLogsConfigurationStore().load();
        }

    }

    , onSourceSelected: function(scope, selected) {
        this.consoleLog("onSourceSelected()");
        // Set the active tab back to capture when changing / selecting source
        this.getLogscapturemain().setLoading(i18n.gettext("Loading Logs"));
        this.getLogslogs().setActiveTab(this.getLogscapturemain());

        var seletedSource = this.getLogssourceslist().getSelectionModel().getSelection()[0];
        if (seletedSource) {
            this.getLogslogs().setTitle(i18n.gettext("Logs of:") + " " + seletedSource.get("NAME"));

            Ext.getStore("logs.Capture").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("logs.Videos").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("logs.CustomVideos").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("logs.Postprod").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("logs.Configuration").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));

            var requiredStores = [];
            requiredStores.push({store: this.getLogsCaptureStore(),       action: "REFRESH"});
            requiredStores.push({store: this.getLogsVideosStore(),        action: "REFRESH"});
            requiredStores.push({store: this.getLogsCustomVideosStore(),  action: "REFRESH"});
            requiredStores.push({store: this.getLogsPostprodStore(),      action: "REFRESH"});
            requiredStores.push({store: this.getLogsConfigurationStore(), action: "REFRESH"});

            this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
                , "WEB_DSP_LOGSCONFIG"
                , "WPAKD.controller.logs.Logs.loadSourceLogs"
                , requiredStores);
        }
    }

    , loadSourceLogs: function() {
        this.consoleLog("loadSourceLogs()");
        this.getLogscapturemain().setLoading(false);

    }

    , menuOpenLogs: function() {
        this.consoleLog("menuOpenLogs()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),                           action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_DSP_LOGS"
            , "WPAKD.controller.logs.Logs.openLogs"
            , requiredStores);

        var applicationName = "WEB_DSP_LOGS";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    },

    openLogs: function(key) {
        this.consoleLog("openLogs()");
        Ext.getBody().unmask();

        if(this.getLogsmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getLogsmain().getId()) {
            this.consoleLog("openLogs(): getLogsmain().toFront()");
            this.getLogsmain().toFront();
        } else if(!this.getLogsmain().isVisible()) {
            this.consoleLog("openLogs(): getLogsmain().setVisible(true)");
            this.getDesktopmain().add(this.getLogsmain());
            this.getLogsmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tblogs").setVisible(true);
            //this.setVisibleElements();
        } else {
            this.consoleLog("openLogs(): getLogsmain().setVisible(false)");
            this.getLogsmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tblogs").setVisible(true);
        }
    },

    closeLogs: function(key) {
        this.consoleLog("closeLogs()");
        this.getDesktoptoolbartoptaskbar().getComponent("tblogs").setVisible(false);
    }

});
