/*global Ext*/
//<debug>
/*
 * This class takes care of updating the disk widget displayed on the dashboard.
 * It gets its values from the status endpoint, periodically updated into the status store.
 * 
 */
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.dashboard.Disk");
//</debug>
Ext.define("WPAKT.controller.dashboard.Disk", {
    extend: "Ext.app.Controller"

    , stores: [
        "dashboard.Status"
    ]

    , models: [
        "dashboard.Status"
    ]

    , views: [
        "dashboard.disk.Main"
        , "dashboard.disk.FreeDiskBar"
        , "dashboard.disk.FreeDiskTxt"
        , "dashboard.disk.UsedDiskBar"
        , "dashboard.disk.UsedDiskTxt"
    ]

    , refs: [
        {ref: "dashboarddiskmain",             selector: "dashboarddiskmain"          }
        , {ref: "dashboarddiskfreediskbar",    selector: "dashboarddiskfreediskbar"   }
        , {ref: "dashboarddiskfreedisktxt",    selector: "dashboarddiskfreedisktxt"   }
        , {ref: "dashboarddiskuseddiskbar",    selector: "dashboarddiskuseddiskbar"   }
        , {ref: "dashboarddiskuseddisktxt",    selector: "dashboarddiskuseddisktxt"   }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.dashboard.Disk.updateCard": this.updateCard
                  }
             }
        });            
    }

    , onLaunch: function() {
        
    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Cards->Disk: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateCard: function() {
        this.consoleLog("updateCard()");
        if (this.getDashboarddiskmain() !== undefined && this.getDashboarddiskmain().isVisible()) {
            var lastStatus = this.getDashboardStatusStore().last().get("STATUS");
            var statusObj = Ext.JSON.decode(lastStatus, true);
            if (statusObj !== null && statusObj.disk !== undefined) {
                this.getDashboarddiskfreediskbar().setValue(statusObj.disk.Free / statusObj.disk.Total);                
                this.getDashboarddiskfreedisktxt().setData({value: Ext.util.Format.fileSize(statusObj.disk.Free), percent: Ext.util.Format.percent(statusObj.disk.Free / statusObj.disk.Total)});                
                this.getDashboarddiskuseddiskbar().setValue(statusObj.disk.Used / statusObj.disk.Total);
                this.getDashboarddiskuseddisktxt().setData({value: Ext.util.Format.fileSize(statusObj.disk.Used), percent: Ext.util.Format.percent(statusObj.disk.Used / statusObj.disk.Total)});            
            }
        }        
    }

});
