/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.stats.System");
//</debug>
Ext.define("WPAKD.controller.stats.System", {
    extend: "Ext.app.Controller",

    views: [
        "desktop.toolbar.top.Taskbar"
        , "stats.system.Main"
        , "stats.system.ButtonRefresh"
        , "stats.system.Range"
        , "stats.system.Bandwidth"
        , "stats.system.Memory"
        , "stats.system.Disk"
        , "stats.system.Cpu"

    ],

    stores: [
        "stats.System"

    ],

    models: [
        "stats.System"

    ],

    refs: [
        {ref: "desktopmain",                selector: "desktopmain"                 }
        , {ref: "desktoptoolbartoptaskbar", selector: "desktoptoolbartoptaskbar"    }

        , {ref: "statssystemmain",          selector: "statssystemmain",            autoCreate: true,   xtype: "statssystemmain"}
        , {ref: "statssystemrange",         selector: "statssystemrange"            }
        , {ref: "statssystembuttonrefresh", selector: "statssystembuttonrefresh"    }
        , {ref: "statssystembandwidth",     selector: "statssystembandwidth",       autoCreate: true,   xtype: "statssystembandwidth"   }
        , {ref: "statssystemmemory",        selector: "statssystemmemory",          autoCreate: true,   xtype: "statssystemmemory"      }
        , {ref: "statssystemdisk",          selector: "statssystemdisk",            autoCreate: true,   xtype: "statssystemdisk"        }
        , {ref: "statssystemcpu",           selector: "statssystemcpu",             autoCreate: true,   xtype: "statssystemcpu"         }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->System: Controller init: function()");
        this.control({
            "desktoptoolbartoptaskbar button[action=openWEB_DSP_STATS_SYSTEM]": {click:  this.openStatsSystem                                   }
            , "statssystemmain":                                {hide:   this.closeStatsSystem, minimize: this.openStatsSystem  }
            , "#menuOpenWEB_DSP_STATS_SYSTEM":                  {click:  this.menuOpenStatsSystem                               }

            , "statssystembuttonrefresh":                       {click:  this.reloadGraphs }
            , "statssystemrange":                               {select: this.selectRange  }


        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.stats.System.openStatsSystem":            this.openStatsSystem
                      , "WPAKD.controller.stats.System.menuOpenStatsSystem":      this.menuOpenStatsSystem
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Stats->System: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , reloadGraphs: function() {
        this.consoleLog("reloadGraphs()");
        this.getStatsSystemStore().load();
    }

    , selectRange: function(scope, record) {
        this.consoleLog("selectRange()");
        if (record !== null) {
            Ext.getStore("stats.System").getProxy().setExtraParam("RANGE", record.get("value"));
            this.reloadGraphs();
        } else {
            this.consoleLog("selectRange(): No range selected");
        }
    }

    , menuOpenStatsSystem: function() {
        this.consoleLog("menuOpenStatsSystem()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");

        var requiredStores = [];
        requiredStores.push({store: this.getStatsSystemStore(),                           action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_DSP_STATS_SYSTEM"
            , "WPAKD.controller.stats.System.openStatsSystem"
            , requiredStores);

        var applicationName = "WEB_DSP_STATS_SYSTEM";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    }

    , openStatsSystem: function() {
        this.consoleLog("openStatsSystem()");
        Ext.getBody().unmask();

        if(this.getStatssystemmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getStatssystemmain().getId()) {
            this.consoleLog("openStatsSystem(): getStatssystemmain().toFront()");
            this.getStatssystemmain().toFront();
        } else if(!this.getStatssystemmain().isVisible()) {
            this.consoleLog("openStatsSystem(): getStatssystemmain().setVisible(true)");
            this.getDesktopmain().add(this.getStatssystemmain());
            this.getStatssystemmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tbstatssystem").setVisible(true);
            this.fireEvent("WPAKD.controller.desktop.WindowManagement.adjustWindowSize", this.getStatssystemmain());
            //this.setVisibleElements();
        } else {
            this.consoleLog("openStatsSystem(): getStatssystemmain().setVisible(false)");
            this.getStatssystemmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tbstatssystem").setVisible(true);
        }
    }

    , closeStatsSystem: function() {
        this.consoleLog("closeStatsSystem()");
        this.getDesktoptoolbartoptaskbar().getComponent("tbstatssystem").setVisible(false);
    }

});
