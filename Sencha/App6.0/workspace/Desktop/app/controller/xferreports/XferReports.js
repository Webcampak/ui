/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": XferReports: Load: WPAKD.controller.xferreports.XferReports");
//</debug>
Ext.define("WPAKD.controller.xferreports.XferReports", {
    extend: "Ext.app.Controller"

    , views: [
        "desktop.toolbar.top.Taskbar"
        , "xferreports.Main"
        , "xferreports.ReportsList"
        , "xferreports.ButtonRefresh"
        , "xferreports.Search"
        , "xferreports.ToolbarRecords"
    ]

    , stores: [
        "shared.Sources"
        , "xferreports.XferReports"
    ]

    , models: [
        "shared.Sources"
        , "xferreports.XferReports"
    ]

    , refs: [
        {ref: "desktopmain",                selector: "desktopmain"                 }
        , {ref: "desktoptoolbartoptaskbar", selector: "desktoptoolbartoptaskbar"    }

        , {ref: "xferreportsmain",                         selector: "xferreportsmain",             autoCreate: true,   xtype: "xferreportsmain"}
        , {ref: "xferreportsreportslist",                  selector: "xferreportsreportslist"       }
        , {ref: "xferreportsbuttonrefresh",                selector: "xferreportsbuttonrefresh"     }
        , {ref: "xferreportssearch",                       selector: "xferreportssearch"            }
        , {ref: "xferreportstoolbarrecords",               selector: "xferreportstoolbarrecords"    }
        
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "desktoptoolbartoptaskbar button[action=openWEB_DSP_XFERREPORTS]":  {click:     this.openXferReports        }
            , "xferreportsmain":                                                {hide:      this.closeXferReports
                                                                                , minimize: this.openXferReports
                                                                                , activate:  this.updateTotalReports}
            , "#menuOpenWEB_DSP_XFERREPORTS":                                   {click:     this.menuOpenXferReports    }
            , "xferreportssearch":                                              {change:    this.searchReports          }
            , "xferreportsbuttonrefresh":                                       {click:      this.reloadXferReports     }

        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.xferReports.XferReports.openXferReports":            this.openXferReports
                      , "WPAKD.controller.xferReports.XferReports.menuOpenXferReports":      this.menuOpenXferReports
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->XferReports: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }    

    , reloadXferReports: function() {
        this.consoleLog("reloadXferReports()");
        this.getXferreportsreportslist().getSelectionModel().deselectAll();
        this.getXferreportsXferReportsStore().on("load",this.updateTotalReports,this,{single:true});
        this.getXferreportsXferReportsStore().load();
    }

    , updateTotalReports: function() {
        this.consoleLog("updateTotalReports()");
        if (this.getXferreportstoolbarrecords()) {
            this.getXferreportstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getXferreportsXferReportsStore().getTotalCount() );
        }
    }

    , searchReports: function() {
        this.consoleLog("searchReports()");
        var scope = this;
        
        this.getXferreportsXferReportsStore().filterBy(function (record) {
            var currentFilter = scope.getXferreportssearch().getValue();
            currentFilter = currentFilter.toUpperCase();

            var currentUuid = record.data.UUID;
            currentUuid = currentUuid.toUpperCase();

            if (currentUuid.indexOf(currentFilter) !== -1) {return true;}
            else {return false;}
        });
        if (this.getXferreportssearch().getValue() === null) {
            this.getXferreportstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getXferreportsXferReportsStore().getTotalCount() );
        } else {
            this.getXferreportstoolbarrecords().setText(i18n.gettext("Number of filtered records: ") + this.getXferreportsXferReportsStore().getCount() + " (" + i18n.gettext("Total") + ": " + this.getXferreportsXferReportsStore().getTotalCount() + ")");
        }
    }        

    , menuOpenXferReports: function() {
        this.consoleLog("menuOpenXferReports()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),                           action: "REFRESH"});
        requiredStores.push({store: this.getXferreportsXferReportsStore(),                  action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_DSP_XFERREPORTS"
            , "WPAKD.controller.xferReports.XferReports.openXferReports"
            , requiredStores);

        var applicationName = "WEB_DSP_XFERREPORTS";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    },

    openXferReports: function(key) {
        this.consoleLog("openXferReports()");
        Ext.getBody().unmask();
        if(this.getXferreportsmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getXferreportsmain().getId()) {
            this.consoleLog("openXferReports(): getXferreportsmain().toFront()");
            this.getXferreportsmain().toFront();
        } else if(!this.getXferreportsmain().isVisible()) {
            this.consoleLog("openXferReports(): getXferreportsmain().setVisible(true)");
            this.getDesktopmain().add(this.getXferreportsmain());
            this.getXferreportsmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tbxferreports").setVisible(true);
            //this.setVisibleElements();
        } else {
            this.consoleLog("openXferReports(): getXferreportsmain().setVisible(false)");
            this.getXferreportsmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tbxferreports").setVisible(true);
        }
    },

    closeXferReports: function(key) {
        this.consoleLog("closeXferReports()");
        this.getDesktoptoolbartoptaskbar().getComponent("tbxferreports").setVisible(false);
    }

});
