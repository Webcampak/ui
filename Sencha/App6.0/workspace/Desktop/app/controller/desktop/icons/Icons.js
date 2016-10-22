/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.icons.Icons");
//</debug>
Ext.define("WPAKD.controller.desktop.icons.Icons", {
    extend: "Ext.app.Controller",

    stores: [
        "shared.Applications"

        , "desktop.icons.DesktopAvailableIcons"
        , "desktop.icons.DesktopCurrentIcons"
        , "shared.UserSettings"
    ],

    models: [
        "shared.Applications"

        , "desktop.icons.DesktopAvailableIcons"
        , "desktop.icons.DesktopCurrentIcons"
        , "shared.UserSettings"

    ],

    views: [
        "desktop.Main"
        , "desktop.icons.AccessControl"
        , "desktop.icons.SourcesConfiguration"
        , "desktop.icons.SystemConfiguration"
        , "desktop.icons.Pictures"
        , "desktop.icons.Videos"
        , "desktop.icons.Logs"
        , "desktop.icons.SyncReports"
        , "desktop.icons.XferReports"
        , "desktop.icons.Alerts"
        , "desktop.icons.Devices"
        , "desktop.icons.StatsSystem"
        , "desktop.icons.StatsSources"

        , "desktop.settings.icons.Main"
        , "desktop.settings.icons.DesktopAvailableIcons"
        , "desktop.settings.icons.DesktopCurrentIcons"
    ],

    refs: [
        {ref: "desktopmain",                            selector: "desktopmain"                 }
        , {ref: "desktopiconsmain",                     selector: "desktopiconsmain"            }
        , {ref: "desktopiconsaccesscontrol",            selector: "desktopiconsaccesscontrol",          autoCreate: true,        xtype: "desktopiconsaccesscontrol"         }
        , {ref: "desktopiconssourcesconfiguration",     selector: "desktopiconssourcesconfiguration",   autoCreate: true,        xtype: "desktopiconssourcesconfiguration"  }
        , {ref: "desktopiconssystemconfiguration",      selector: "desktopiconssystemconfiguration",    autoCreate: true,        xtype: "desktopiconssystemconfiguration"   }
        , {ref: "desktopiconspictures",                 selector: "desktopiconspictures",               autoCreate: true,        xtype: "desktopiconspictures"              }
        , {ref: "desktopiconsvideos",                   selector: "desktopiconsvideos",                 autoCreate: true,        xtype: "desktopiconsvideos"                }
        , {ref: "desktopiconslogs",                     selector: "desktopiconslogs",                   autoCreate: true,        xtype: "desktopiconslogs"                  }
        , {ref: "desktopiconssyncreports",              selector: "desktopiconssyncreports",            autoCreate: true,        xtype: "desktopiconssyncreports"           }
        , {ref: "desktopiconsxferreports",              selector: "desktopiconsxferreports",            autoCreate: true,        xtype: "desktopiconsxferreports"           }
        , {ref: "desktopiconsalerts",                   selector: "desktopiconsalerts",                 autoCreate: true,        xtype: "desktopiconsalerts"                }
        , {ref: "desktopiconsdevices",                  selector: "desktopiconsdevices",                autoCreate: true,        xtype: "desktopiconsdevices"               }
        , {ref: "desktopiconsstatssystem",              selector: "desktopiconsstatssystem",            autoCreate: true,        xtype: "desktopiconsstatssystem"           }
        , {ref: "desktopiconsstatssources",             selector: "desktopiconsstatssources",           autoCreate: true,        xtype: "desktopiconsstatssources"          }

        , {ref: "desktopsettingsiconsmain",                     selector: "desktopsettingsiconsmain",   autoCreate: true,        xtype: "desktopsettingsiconsmain"     }
        , {ref: "desktopsettingsiconsdesktopavailableicons",    selector: "desktopsettingsiconsdesktopavailableicons"    }
        , {ref: "desktopsettingsiconsdesktopcurrenticons",      selector: "desktopsettingsiconsdesktopcurrenticons"      }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller init: function()");
        this.control({
            "*": {
                "WPAKD.controller.desktop.icons.Icons.iconClick": this.iconClick
                , "WPAKD.controller.desktop.icons.Icons.iconDbClick": this.iconDbClick
            }
            , "desktopiconsmain":                                                    {resize:  this.reloadSharedApplications        }

            , "#openDesktopIconsSettings":                                           {click:    this.openDesktopIconsSettings       }
            , "#saveDesktopIcons":                                                   {click:    this.saveDesktopIcons               }
            , "desktopsettingsiconsmain tool[action=reloadDesktopAvailableIcons]":   {click:    this.reloadDesktopAvailableIcons    }
            , "desktopsettingsiconsmain tool[action=reloadDesktopCurrentIcons]":     {click:    this.reloadDesktopCurrentIcons      }
            , "desktopsettingsiconsdesktopcurrenticons dataview":                    {drop:     this.dropIntoCurrentIcons           }
            , "desktopsettingsiconsdesktopavailableicons dataview":                  {drop:     this.dropIntoAvailableIcons         }

        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.desktop.icons.Icons.reloadIconsLaunch":     this.reloadIconsLaunch
                      , "WPAKD.controller.desktop.icons.Icons.reloadDesktopIcons":  this.reloadDesktopIcons
                      , "WPAKD.controller.desktop.icons.Icons.hideIcons":           this.hideIcons
                  }
            }
            , store: {
                "*": {
                  "WPAKD.controller.desktop.icons.Icons.reloadIconsLaunch": this.reloadIconsLaunch
                }
            }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
//        this.reloadSharedApplications();
//        this.getDesktopIconsDesktopCurrentIconsStore().on("load",this.reloadDesktopIcons,this,{single:true});
        this.getDesktopIconsDesktopCurrentIconsStore().load();
        this.getSharedApplicationsStore().on("load",this.reloadDesktopIcons,this,{single:true});
        this.getSharedApplicationsStore().load();
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , hideIcons: function() {
        this.consoleLog("hideIcons()");
        this.getDesktopiconsaccesscontrol().setVisible(false);
        this.getDesktopiconssourcesconfiguration().setVisible(false);
        this.getDesktopiconspictures().setVisible(false);
        this.getDesktopiconsvideos().setVisible(false);
    }

    , dropIntoCurrentIcons: function() {
        this.consoleLog("dropIntoCurrentIcons()");
        this.getDesktopIconsDesktopCurrentIconsStore().rejectChanges();
        this.getDesktopIconsDesktopAvailableIconsStore().sync();
        this.reloadIconsStore();
    }

    , dropIntoAvailableIcons: function() {
        this.consoleLog("dropIntoCurrentIcons()");
        this.getDesktopIconsDesktopCurrentIconsStore().sync();
        this.getDesktopIconsDesktopAvailableIconsStore().rejectChanges();
        this.reloadIconsStore();
    }

    , reloadIconsStore: function() {
        this.consoleLog("reloadIconsStore()");
        var requiredStores = [];
        requiredStores.push({store: this.getDesktopIconsDesktopCurrentIconsStore(),     action: "REFRESH"});
        requiredStores.push({store: this.getDesktopIconsDesktopAvailableIconsStore(),   action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "DESKTOP_ICONS"
            , "WPAKD.controller.desktop.icons.Icons.reloadDesktopIcons"
            , requiredStores);
    }

    , reloadIconsLaunch: function() {
        this.consoleLog("reloadIconsLaunch()");
        this.getDesktopIconsDesktopCurrentIconsStore().load();
        this.getSharedApplicationsStore().on("load",this.reloadDesktopIcons,this,{single:true});
        this.getSharedApplicationsStore().load();
    }

    , saveDesktopIcons: function() {
        this.consoleLog("saveDesktopIcons()");
        this.getDesktopIconsDesktopCurrentIconsStore().sync();
    }

    , reloadSharedApplications: function() {
        this.consoleLog("reloadSharedApplications()");
        Ext.getBody().mask("Please wait, placing icons on screen ...");
        this.getSharedApplicationsStore().on("load",this.reloadDesktopIcons,this,{single:true});
        this.getSharedApplicationsStore().load();
    }

    , reloadDesktopIcons: function() {
        this.consoleLog("reloadDesktopIcons()");
        var scope = this;
        this.getSharedApplicationsStore().each(function(r){
            scope.consoleLog("reloadDesktopIcons(): CODE: " + r.get("CODE"));
            var currentCode = r.get("CODE");
            if (currentCode == "WEB_CFG_ACCESSCONTROL")     {var currentIconWidget = scope.getDesktopiconsaccesscontrol();             var currentIconDefaultX = -2;  var currentIconDefaultY = 2;   }
            else if (currentCode == "WEB_CFG_SOURCES")      {var currentIconWidget = scope.getDesktopiconssourcesconfiguration();      var currentIconDefaultX = -8;  var currentIconDefaultY = 2;   }
            else if (currentCode == "WEB_CFG_SYSTEM")       {var currentIconWidget = scope.getDesktopiconssystemconfiguration();       var currentIconDefaultX = -2;  var currentIconDefaultY = 8;   }
            else if (currentCode == "WEB_DSP_PICTURES")     {var currentIconWidget = scope.getDesktopiconspictures();                  var currentIconDefaultX = 2;   var currentIconDefaultY = 2;   }
            else if (currentCode == "WEB_DSP_VIDEOS")       {var currentIconWidget = scope.getDesktopiconsvideos();                    var currentIconDefaultX = 8;   var currentIconDefaultY = 2;   }
            else if (currentCode == "WEB_DSP_LOGS")         {var currentIconWidget = scope.getDesktopiconslogs();                      var currentIconDefaultX = 2;   var currentIconDefaultY = 14;  }
            else if (currentCode == "WEB_DSP_SYNCREPORTS")  {var currentIconWidget = scope.getDesktopiconssyncreports();               var currentIconDefaultX = 2;   var currentIconDefaultY = 26;  }
            else if (currentCode == "WEB_DSP_XFERREPORTS")  {var currentIconWidget = scope.getDesktopiconsxferreports();               var currentIconDefaultX = 2;   var currentIconDefaultY = 46;  }
            else if (currentCode == "WEB_CFG_ALERTS")       {var currentIconWidget = scope.getDesktopiconsalerts();                    var currentIconDefaultX = 2;   var currentIconDefaultY = 20;  }
            else if (currentCode == "WEB_DSP_DEVICES")      {var currentIconWidget = scope.getDesktopiconsdevices();                   var currentIconDefaultX = -2;  var currentIconDefaultY = 14;  }
            else if (currentCode == "WEB_DSP_STATS_SYSTEM") {var currentIconWidget = scope.getDesktopiconsstatssystem();               var currentIconDefaultX = 8;   var currentIconDefaultY = 8;   }
            else if (currentCode == "WEB_DSP_STATS_SOURCES"){var currentIconWidget = scope.getDesktopiconsstatssources();              var currentIconDefaultX = 2;   var currentIconDefaultY = 8;   }
            else {var currentIconWidget = null;}

            if (currentIconWidget) {
                var record = scope.getDesktopIconsDesktopCurrentIconsStore().findRecord("CODE", currentCode, 0, false, false, true);
                if (record && record.get("ICON_VISIBLE_FLAG") == "Y") {
                    if (record.get("ICON_X_COORDINATE") !== 0 && record.get("ICON_Y_COORDINATE") !== 0 ) {
                        scope.arrangeIcon(currentIconWidget, record.get("ICON_X_COORDINATE"), record.get("ICON_Y_COORDINATE"));
                    }
                    else { scope.arrangeIcon(currentIconWidget, currentIconDefaultX, currentIconDefaultY);}
                    scope.consoleLog("reloadDesktopIcons(): Showing Icon: " + currentCode);
                } else {
                    if (currentIconWidget) {
                        scope.consoleLog("reloadDesktopIcons(): Hiding Icon: " + currentCode);
                        currentIconWidget.hide();
                    }
                }
            }
        });
        Ext.getBody().unmask();
    }

    , openDesktopIconsSettings: function() {
        this.consoleLog("openDesktopIconsSettings()");
        this.getDesktopIconsDesktopCurrentIconsStore().sync();
        if (this.getDesktopIconsDesktopAvailableIconsStore().getCount() == 0){this.getDesktopIconsDesktopAvailableIconsStore().load();}
        if (this.getDesktopIconsDesktopCurrentIconsStore().getCount() == 0){this.getDesktopIconsDesktopCurrentIconsStore().load();}
        //if (this.getSharedApplicationsStore().getCount() == 0){this.getSharedApplicationsStore().load();}

        this.getDesktopsettingsiconsmain().show();
    }

    , reloadDesktopAvailableIcons: function() {
        this.consoleLog("reloadDesktopAvailableIcons()");
        this.getDesktopIconsDesktopAvailableIconsStore().load();
    }

    , reloadDesktopCurrentIcons: function() {
        this.consoleLog("reloadDesktopCurrentIcons()");
        this.getDesktopIconsDesktopCurrentIconsStore().load();
    }

    , arrangeIcon: function(selectedIcon, XPos, YPos) {
        this.consoleLog("arrangeIcon()");
        this.consoleLog("arrangeIcon() - Position: X: " + XPos + " Y: " + YPos);
        if (!XPos) {XPos = 10;}
        if (!YPos) {YPos = 10;}

        if (selectedIcon) {
            if (!selectedIcon.isVisible()) {selectedIcon.show();}
            var gridStepX = 20;
            var gridStepY = 20;

            var globalWindowWidth = this.getDesktopiconsmain().up().getWidth();
            var globalWindowHeight = this.getDesktopiconsmain().up().getHeight();

            var XDotsNb = Math.round(globalWindowWidth / gridStepX);
            var YDotsNb = Math.round(globalWindowHeight / gridStepY);

            var usableXDotsNb = XDotsNb - 4;
            var usableYDotsNb = YDotsNb - 4;

            this.consoleLog("arrangeIcon() - Usable Dots: X: " + usableXDotsNb + " Y: " + usableYDotsNb);

            // If XPos is < 0, means start from right of the screen
            // If YPos is < 0, means start from bottom of the screen
            if (XPos < 0) {XPos = usableXDotsNb - (XPos*-1);}
            if (YPos < 0) {YPos = usableYDotsNb - (YPos*-1);}

            if (XPos > usableXDotsNb) {XPos = usableXDotsNb}
            if (YPos > usableYDotsNb) {YPos = usableYDotsNb}

            this.consoleLog("arrangeIcon() - Updated Position: X: " + XPos + " Y: " + YPos);
            this.consoleLog("arrangeIcon() - Inserting icon at screen position: X: " + (XPos * gridStepX) + " Y: " + (YPos * gridStepY));

            selectedIcon.setX(XPos * gridStepX);
            selectedIcon.setY(YPos * gridStepY);

        } else {
            this.consoleLog("arrangeIcon() - No Icon Selected");
        }

    }

    , iconClick: function(view, clickedIcon) {
        this.consoleLog("iconClick()");
        this.consoleLog("iconClick() - User clicked on " + clickedIcon);

        if (clickedIcon == "WEB_CFG_ACCESSCONTROL")         {this.moveIcon(this.getDesktopiconsaccesscontrol(), clickedIcon);            }
        else if (clickedIcon == "WEB_CFG_SOURCES")          {this.moveIcon(this.getDesktopiconssourcesconfiguration(), clickedIcon);     }
        else if (clickedIcon == "WEB_CFG_SYSTEM")           {this.moveIcon(this.getDesktopiconssystemconfiguration(), clickedIcon);      }
        else if (clickedIcon == "WEB_DSP_PICTURES")         {this.moveIcon(this.getDesktopiconspictures(), clickedIcon);                 }
        else if (clickedIcon == "WEB_DSP_VIDEOS")           {this.moveIcon(this.getDesktopiconsvideos(), clickedIcon);                   }
        else if (clickedIcon == "WEB_DSP_LOGS")             {this.moveIcon(this.getDesktopiconslogs(), clickedIcon);                     }
        else if (clickedIcon == "WEB_DSP_SYNCREPORTS")      {this.moveIcon(this.getDesktopiconssyncreports(), clickedIcon);              }
        else if (clickedIcon == "WEB_DSP_XFERREPORTS")      {this.moveIcon(this.getDesktopiconsxferreports(), clickedIcon);              }
        else if (clickedIcon == "WEB_CFG_ALERTS")           {this.moveIcon(this.getDesktopiconsalerts(), clickedIcon);                   }
        else if (clickedIcon == "WEB_DSP_DEVICES")          {this.moveIcon(this.getDesktopiconsdevices(), clickedIcon);                  }
        else if (clickedIcon == "WEB_DSP_STATS_SYSTEM")     {this.moveIcon(this.getDesktopiconsstatssystem(), clickedIcon);              }
        else if (clickedIcon == "WEB_DSP_STATS_SOURCES")    {this.moveIcon(this.getDesktopiconsstatssources(), clickedIcon);             }
    }

    , moveIcon: function(selectedIcon, appCode) {
        this.consoleLog("moveIcon()");
        this.consoleLog("moveIcon() - Moving Icon corresponding to AppCode: " + appCode);

        var gridStepX = 20;
        var gridStepY = 20;

        var globalWindowWidth = this.getDesktopiconsmain().up().getWidth();
        var globalWindowHeight = this.getDesktopiconsmain().up().getHeight();

        var droppedLocationX = selectedIcon.getX();
        var droppedLocationY = selectedIcon.getY();

        var XDotsNb = Math.round(globalWindowWidth / gridStepX);
        var YDotsNb = Math.round(globalWindowHeight / gridStepY);

        var usableXDotsNb = XDotsNb - 4;
        var usableYDotsNb = YDotsNb - 4;
        var usableWindowWidth = usableXDotsNb * gridStepX;
        var usableWindowHeight = usableYDotsNb * gridStepY;

        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Number of horizontal dots: " + XDotsNb);
        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Number of vertical dots: " + YDotsNb);
        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Usable Window Width: " + usableWindowWidth);
        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Usable window Height: " + usableWindowHeight);
        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Number of usable horizontal dots: " + usableXDotsNb);
        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Number of usable vertical dots: " + usableYDotsNb);

        //Find onto which dot the icon must be attached
        if (droppedLocationX > (usableXDotsNb*gridStepX)) {
                var targetXDot = usableXDotsNb;
        } else if (droppedLocationX < 0) {
                var targetXDot = 0;
        } else {
            for (var i=0;i<usableXDotsNb;i++) {
                if (droppedLocationX >= (i*gridStepX) && droppedLocationX < ((i+1)*gridStepX)){
                    var targetXDot = i;
                }
            }
        }

        if (droppedLocationY > (usableYDotsNb*gridStepY)) {
                var targetYDot = usableYDotsNb;
        } else if (droppedLocationY < gridStepY) {
                var targetYDot = 1;
        }  else {
            for (var i=0;i<usableYDotsNb;i++) {
                if (droppedLocationY >= (i*gridStepY) && droppedLocationY < ((i+1)*gridStepY)){
                    var targetYDot = i;
                }
            }
        }

        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Icon will be assigned to dot X: " + targetXDot);
        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Icons->Icons: Controller moveIcon: Icon will be assigned to dot Y: " + targetYDot);

        selectedIcon.setX(targetXDot * gridStepX);
        selectedIcon.setY(targetYDot * gridStepY);

        this.consoleLog("moveIcon() - Saving Icon location in store");
        var record = this.getDesktopIconsDesktopCurrentIconsStore().findRecord("CODE", appCode, 0, false, false, true);
        if (record) {
            this.getDesktopIconsDesktopCurrentIconsStore().suspendAutoSync();
            record.set("ICON_X_COORDINATE", targetXDot);
            record.set("ICON_Y_COORDINATE", targetYDot);
        } else {
            this.consoleLog("moveIcon() - ERROR: icon not found, appCode: " + appCode, "warn");
        }
    }

    , iconDbClick: function(view, clickedIcon) {
        this.consoleLog("iconDbClick()");
        this.consoleLog("iconDbClick() - User double clicked on " + clickedIcon);
        if (clickedIcon == "WEB_CFG_ACCESSCONTROL")     {this.fireEvent("WPAKD.controller.accesscontrol.AccessControl.menuOpenAccessControl");                      }
        else if (clickedIcon == "WEB_CFG_SOURCES")      {this.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.menuOpenSourcesConfiguration"); }
        else if (clickedIcon == "WEB_CFG_SYSTEM")       {this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.menuOpenSystemConfiguration");    }
        else if (clickedIcon == "WEB_DSP_PICTURES")     {this.fireEvent("WPAKD.controller.pictures.Pictures.menuOpenPictures");                                     }
        else if (clickedIcon == "WEB_DSP_VIDEOS")       {this.fireEvent("WPAKD.controller.videos.Videos.menuOpenVideos");                                           }
        else if (clickedIcon == "WEB_DSP_LOGS")         {this.fireEvent("WPAKD.controller.logs.Logs.menuOpenLogs");                                                 }
        else if (clickedIcon == "WEB_DSP_SYNCREPORTS")  {this.fireEvent("WPAKD.controller.syncreports.SyncReports.menuOpenSyncReports");                            }
        else if (clickedIcon == "WEB_DSP_XFERREPORTS")  {this.fireEvent("WPAKD.controller.xferreports.XferReports.menuOpenXferReports");                            }
        else if (clickedIcon == "WEB_CFG_ALERTS")       {this.fireEvent("WPAKD.controller.alerts.Alerts.menuOpenAlerts");                                           }
        else if (clickedIcon == "WEB_DSP_DEVICES")      {this.fireEvent("WPAKD.controller.devices.Devices.menuOpenDevices");                                        }
        else if (clickedIcon == "WEB_DSP_STATS_SYSTEM") {this.fireEvent("WPAKD.controller.stats.System.menuOpenStatsSystem");                                       }
        else if (clickedIcon == "WEB_DSP_STATS_SOURCES"){this.fireEvent("WPAKD.controller.stats.Sources.menuOpenStatsSources");                                     }
    }
});