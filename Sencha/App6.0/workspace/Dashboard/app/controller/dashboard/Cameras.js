/*global Ext i18n*/
//<debug>
/*
 * This class takes care of updating the camera widget displayed on the dashboard.
 * It gets its values from the status endpoint, periodically updated into the status store.
 * 
 */
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.dashboard.Cameras");
//</debug>
Ext.define("WPAKT.controller.dashboard.Cameras", {
    extend: "Ext.app.Controller"

    , stores: [
        "dashboard.Status"
    ]

    , models: [
        "dashboard.Status"

    ]

    , views: [
        "dashboard.cameras.Main"
        , "dashboard.cameras.CamerasTxt"
    ]

    , refs: [
        {ref: "dashboardcamerasmain",          selector: "dashboardcamerasmain"       }
        , {ref: "dashboardcamerascamerastxt",  selector: "dashboardcamerascamerastxt" }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.dashboard.Cameras.updateCard": this.updateCard
                  }
             }
        });              
    }

    , onLaunch: function() {
        
    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Cards->Cameras: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }
    
    /*
     * Update the camera card, if the card is visible, get the latest status value from the store and update the card
     */
    , updateCard: function() {
        this.consoleLog("updateCard()");
        if (this.getDashboardcamerasmain() !== undefined && this.getDashboardcamerasmain().isVisible()) {
            var lastStatus = this.getDashboardStatusStore().last().get("STATUS");
            var statusObj = Ext.JSON.decode(lastStatus, true);
            if (statusObj !== null && statusObj.cameras !== undefined) {
                if (statusObj.cameras.length === 0) {
                    this.getDashboardcamerascamerastxt().setData([{NAME: "No Camera detected", ID: ""}]);
                } else {
                    this.getDashboardcamerascamerastxt().setData(statusObj.cameras);                    
                }
            }
        }        
    }    

});
