/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.dashboard.Uptime");
//</debug>
Ext.define("WPAKT.controller.dashboard.Uptime", {
    extend: "Ext.app.Controller",

    stores: [
        "dashboard.Status"
    ],

    models: [
        "dashboard.Status"

    ],


    views: [
        "dashboard.uptime.Main"
        , "dashboard.uptime.Years"
        , "dashboard.uptime.Days"
        , "dashboard.uptime.Hours"
        , "dashboard.uptime.Minutes"
        , "dashboard.uptime.Seconds"
    ],

    refs: [
        {ref: "dashboarduptimemain",       selector: "dashboarduptimemain"    }
        , {ref: "dashboarduptimeyears",    selector: "dashboarduptimeyears"   }
        , {ref: "dashboarduptimedays",     selector: "dashboarduptimedays"    }
        , {ref: "dashboarduptimehours",    selector: "dashboarduptimehours"   }
        , {ref: "dashboarduptimeminutes",  selector: "dashboarduptimeminutes" }
        , {ref: "dashboarduptimeseconds",  selector: "dashboarduptimeseconds" }
        , {ref: "coreauthenticationmain",       selector: "coreauthenticationmain"      }
        
    ]

    , init: function() {
        this.consoleLog("init()");
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.dashboard.Uptime.updateCard": this.updateCard
                    , "WPAKT.controller.dashboard.Uptime.initiateRefreshWatcher": this.initiateRefreshWatcher
                  }
             }
        });             
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
        this.initiateRefreshWatcher();
        /*
        var scope = this;
        var currentStatus = this.getDashboardStatusStore().last();
        if (currentStatus === undefined || currentStatus === null || this.getBootDate() === null) {
            this.consoleLog("onLaunch() - App not initialized yet");
            setTimeout(function() {
                scope.onLaunch();
            },100);            
        } else {
            var interval = setInterval(function() {                
                scope.refreshDisplayedUptime();
            }, 1000); // Refresh displayed time every second        
        }        
        */
    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Cards->Uptime: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    // Setters and getters for uptime
    , getBootDate: function() {if (this.bootDate === undefined) {this.setBootDate(false);} return this.bootDate;}
    , setBootDate: function(bootDate) {this.bootDate = bootDate; return this.bootDate;}
    
    , getRefreshStatus: function() {if (this.refereshStatus === undefined) {this.setRefreshStatus(false);} return this.refereshStatus;}
    , setRefreshStatus: function(refreshStatus) {this.refereshStatus = refreshStatus;return this.refereshStatus;}   
    
    , getWatcherId: function() {if (this.watcherId === undefined) {this.setWatcherId(false);}return this.watcherId;}
    , setWatcherId: function(watcherId) {this.watcherId = watcherId;return this.watcherId;}       
    
    , startRefresh: function() {
        this.consoleLog("startRefresh()");
        var scope = this;
        this.stopRefresh();
        var intervalId = setInterval(function() {                
            scope.refreshDisplayedUptime();
        }, 1000); // Refresh displayed time every second  
        this.setRefreshStatus(intervalId);                
    }        
    
    , stopRefresh: function() {
        this.consoleLog("stopRefresh()");
        var intervalId = this.getRefreshStatus();
        if (intervalId !== false) {
            clearInterval(intervalId);
            this.setRefreshStatus(false);
        } else {
            this.consoleLog("stopRefresh(): There was no process running");
        }        
    } 
    
    // After having been instantiated, will spawn a process to check every 100ms is the panel is visible
    // If not visible, it will stop the component refresh.
    // If visible, it will check if the component has a refresh job, if not it will start one.
    , initiateRefreshWatcher: function() {
        this.consoleLog("initiateRefreshWatcher()");
        var scope = this;
        var watcherId = setInterval(function() {              
            if (scope.getDashboarduptimemain() !== undefined && scope.getDashboarduptimemain().isVisible()) {
                if (scope.getRefreshStatus() === false) {
                    scope.startRefresh();
                }
            } else {
                if (scope.getRefreshStatus() !== false) {
                    scope.stopRefresh();
                }
            }
        }, 100); 
        this.setWatcherId(watcherId);                
    }
    
    , updateCard: function() {
        this.consoleLog("updateCard()");
        if (this.getDashboarduptimemain() !== undefined && this.getDashboarduptimemain().isVisible()) {
            var lastStatus = this.getDashboardStatusStore().last().get("STATUS");
            var statusObj = Ext.JSON.decode(lastStatus, true);
            if (statusObj !== null && statusObj.bootdate !== undefined) {
                this.setBootDate(new Date(statusObj.bootdate));
            }
        }        
    }

    , refreshDisplayedUptime: function() {
        if (this.getDashboarduptimemain() !== undefined && this.getDashboarduptimemain().isVisible() && this.getBootDate() !== false ) {
            var currentDate = new Date();
            var currentUptime = Ext.Date.diff(this.getBootDate(), new Date(), "s");
            this.getDashboarduptimeyears().setHtml(this.secondsToYear(currentUptime)); 
            this.getDashboarduptimedays().setHtml(this.secondsToDays(currentUptime)); 
            this.getDashboarduptimehours().setHtml(this.secondsToHours(currentUptime)); 
            this.getDashboarduptimeminutes().setHtml(this.secondsToMinutes(currentUptime)); 
            this.getDashboarduptimeseconds().setHtml(this.secondsToSeconds(currentUptime));            
        }
    }
    , secondsToYear: function(seconds) {
        var years = Math.floor(seconds / 31536000);
        if (years === 0) {years = "0";}
        return years;
    } 
    
    , secondsToDays: function(seconds) {
        var days = Math.floor((seconds % 31536000) / 86400); 
        if (days === 0) {days = "000";}
        else if (days < 10) {days = "00" + days;}
        else if (days < 100) {days = "0" + days;}
        return days;
    } 
    
    , secondsToHours: function(seconds) {
        var hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        if (hours === 0) {hours = "00";}
        else if (hours < 10) {hours = "0" + hours;}
        return hours;
    }  
    
    , secondsToMinutes: function(seconds) {
        var minutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        if (minutes === 0) {minutes = "00";}
        else if (minutes < 10) {minutes = "0" + minutes;}
        return minutes;
    }  
    
    , secondsToSeconds: function(seconds) {
        var seconds = (((seconds % 31536000) % 86400) % 3600) % 60;
        if (seconds === 0) {seconds = "00";}
        else if (seconds < 10) {seconds = "0" + seconds;}
        return seconds;
    } 
    
    , secondsToString: function(seconds) {
        var numyears = Math.floor(seconds / 31536000);
        var numdays = Math.floor((seconds % 31536000) / 86400); 
        var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
        return numyears + "y " +  numdays + "d " + numhours + "h " + numminutes + "m " + numseconds + "s";
    }

});
