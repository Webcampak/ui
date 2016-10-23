/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.dashboard.Dashboard");
//</debug>
Ext.define("WPAKT.controller.dashboard.Dashboard", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [
        "dashboard.Main"
        , "dashboard.uptime.Main"
        , "dashboard.Blank"
        , "core.skeleton.card.Main"
    ]

    , refs: [
        {ref: "dashboardmain",             selector: "dashboardmain",         autoCreate: true,   xtype: "dashboardmain" }
        , {ref: "dashboarduptimemain",     selector: "dashboarduptimemain"    }
        , {ref: "dashboardblank",          selector: "dashboardblank"         }
        , {ref: "coreskeletoncardmain",     selector: "coreskeletoncardmain"  }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.dashboard.Dashboard.showDashboard": this.showDashboard
                  }
             }
        });              
    }

    , onLaunch: function() {

    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Cards->Dashboard: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }
    
    , showDashboard: function() {
        this.consoleLog("showDashboard()");
        if (this.fireEvent("WPAKT.controller.dashboard.Status.isLoadedAndAuthenticated") === false) {
            this.fireEvent("WPAKT.controller.dashboard.Status.loadStatus");
        } 
        var scope = this;
        this.getCoreskeletoncardmain().removeAll();
        this.getCoreskeletoncardmain().add(scope.getDashboardmain());  
        scope.getDashboardmain().show();
        this.fireEvent("WPAKT.controller.dashboard.Status.fireCardsUpdate");
    }    

});