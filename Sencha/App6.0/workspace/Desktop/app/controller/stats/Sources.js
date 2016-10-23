/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.stats.Sources");
//</debug>
Ext.define("WPAKD.controller.stats.Sources", {
    extend: "Ext.app.Controller",

    views: [
        "desktop.toolbar.top.Taskbar"
        , "stats.sources.Main"
        , "stats.sources.ButtonRefresh"
        , "stats.sources.SourcesList"
        , "stats.sources.SourceName"
        , "stats.sources.PicturesCount"
        , "stats.sources.PicturesSize"
        , "stats.sources.DiskUsage"

    ],

    stores: [
        "shared.Sources"
        , "stats.SourcesDiskUsage"
        , "stats.SourcesPicturesCountSize"
    ],

    models: [
        "shared.Sources"
        , "stats.SourcesDiskUsage"
        , "stats.SourcesPicturesCountSize"
    ],

    refs: [
        {ref: "desktopmain",                selector: "desktopmain"                 }
        , {ref: "desktoptoolbartoptaskbar", selector: "desktoptoolbartoptaskbar"    }

        , {ref: "statssourcesmain",             selector: "statssourcesmain",           autoCreate: true,   xtype: "statssourcesmain"}
        , {ref: "statssourcesbuttonrefresh",    selector: "statssourcesbuttonrefresh"   }
        , {ref: "statssourcessourceslist",      selector: "statssourcessourceslist"     }
        , {ref: "statssourcessourcename",       selector: "statssourcessourcename"      }
        , {ref: "statssourcespicturescount",    selector: "statssourcespicturescount"   }
        , {ref: "statssourcespicturessize",     selector: "statssourcespicturessize"    }
        , {ref: "statssourcesdiskusage",        selector: "statssourcesdiskusage"       }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Sources: Controller init: function()");
        this.control({
            "desktoptoolbartoptaskbar button[action=openWEB_DSP_STATS_SOURCES]":    {click:  this.openStatsSources                                   }
            , "statssourcesmain":                                   {hide:   this.closeStatsSources, minimize: this.openStatsSources }
            , "#menuOpenWEB_DSP_STATS_SOURCES":                     {click:  this.menuOpenStatsSources                               }

            , "statssourcessourceslist":                            {change: this.onSourceSelected  }
            , "statssourcesbuttonrefresh":                          {click:  this.loadStores      }

        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.stats.Sources.openStatsSources":            this.openStatsSources
                      , "WPAKD.controller.stats.Sources.menuOpenStatsSources":      this.menuOpenStatsSources
                      , "WPAKD.controller.stats.Sources.loadingCompleted":          this.loadingCompleted
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Stats->Sources: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , loadStores: function(key) {
        this.consoleLog("loadStores()");

        this.fireEvent("WPAKD.controller.desktop.loading.Mask.beginLoading", this.getStatssourcesmain(), "Please wait, loading data...");

        var requiredStores = [];
        requiredStores.push({store: this.getStatsSourcesPicturesCountSizeStore(),       action: "REFRESH"});
        requiredStores.push({store: this.getStatsSourcesDiskUsageStore(),               action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_DSP_STATS_SOURCES_STORES"
            , "WPAKD.controller.stats.Sources.loadingCompleted"
            , requiredStores);
    }

    , loadingCompleted: function(key) {
        this.consoleLog("loadingCompleted()");
        this.fireEvent("WPAKD.controller.desktop.loading.Mask.endLoading", this.getStatssourcesmain());
    }


    , onSourceSelected: function(combo, newValue, oldValue) {
        this.consoleLog("onSourceSelected()");
        selectedSource = this.getSharedSourcesStore().getById(newValue);

        this.getStatssourcessourcename().setHtml(selectedSource.get("NAME"));

        this.consoleLog("onSourceSelected(): Selected source name is: " + selectedSource.get("NAME"));
        this.consoleLog("onSourceSelected(): Selected source SOURCEID is: " + selectedSource.get("SOURCEID"));

        Ext.getStore("stats.SourcesDiskUsage").getProxy().setExtraParam("SOURCEID", selectedSource.get("SOURCEID"));
        Ext.getStore("stats.SourcesPicturesCountSize").getProxy().setExtraParam("SOURCEID", selectedSource.get("SOURCEID"));

        this.loadStores();

    }

    , selectFirstSource: function(key) {
        this.consoleLog("selectFirstSource()");
        var record = this.getSharedSourcesStore().first();
        this.getStatssourcessourceslist().setValue(record);
    }

    , menuOpenStatsSources: function() {
        this.consoleLog("menuOpenStatsSources()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),               action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_DSP_STATS_SOURCES"
            , "WPAKD.controller.stats.Sources.openStatsSources"
            , requiredStores);

        var applicationName = "WEB_DSP_STATS_SOURCES";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    },

    openStatsSources: function(key) {
        this.consoleLog("openStatsSources()");
        Ext.getBody().unmask();

        if(this.getStatssourcesmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getStatssourcesmain().getId()) {
            this.consoleLog("openStatsSources(): getStatssourcesmain().toFront()");
            this.getStatssourcesmain().toFront();
        } else if(!this.getStatssourcesmain().isVisible()) {
            this.consoleLog("openStatsSources(): getStatssourcesmain().setVisible(true)");
            this.getDesktopmain().add(this.getStatssourcesmain());
            this.getStatssourcesmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tbstatssources").setVisible(true);
            this.selectFirstSource();
            //this.setVisibleElements();
        } else {
            this.consoleLog("openStatsSources(): getStatssourcesmain().setVisible(false)");
            this.getStatssourcesmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tbstatssources").setVisible(true);
        }
    },

    closeStatsSources: function(key) {
        this.consoleLog("closeStatsSources()");
        this.getDesktoptoolbartoptaskbar().getComponent("tbstatssources").setVisible(false);
    }

});
