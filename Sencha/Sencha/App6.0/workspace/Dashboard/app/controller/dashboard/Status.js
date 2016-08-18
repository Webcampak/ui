//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.controller.dashboard.Status');
//</debug>
Ext.define('WPAKT.controller.dashboard.Status', {
    extend: 'Ext.app.Controller',

    stores: [
        'dashboard.Status'
    ],

    models: [
        'dashboard.Status'
    ],


    views: [
        'dashboard.Main'

    ],

    refs: [
        {ref: 'dashboardmain',           selector: 'dashboardmain',    autoCreate: true,   xtype: 'dashboardmain'    }

    ]

    , init: function() {
        this.consoleLog('init()');
        this.listen({
             controller: {
                  '*': {
                    'WPAKT.controller.dashboard.Status.loadStatus': this.loadStatus
                    , 'WPAKT.controller.dashboard.Status.isLoadedAndAuthenticated': this.isLoadedAndAuthenticated
                    , 'WPAKT.controller.dashboard.Status.fireCardsUpdate': this.fireCardsUpdate
                  }
             }
        });          
            
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
        var scope = this;
        this.loadStatus();        
        var interval = setInterval(function() {                
            scope.loadStatus();
        }, 60000);     
    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Dashboard->Status: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    // Setters and getters for loading status
    , getStatusLoading: function() {
        if (this.statusLoading === undefined) {this.setStatusLoading(false);}
        return this.statusLoading;
    }

    , setStatusLoading: function(statusLoading) {
        this.statusLoading = statusLoading;
        return this.statusLoading;
    }

    , isStatusLoading: function() {
        this.consoleLog('isStatusLoading()');
        return this.getStatusLoading();
    }

    // Setters and getters for status values
    , getStatus: function() {
        if (this.status === undefined) {this.setStatus(null);}
        return this.status;
    }
    , setStatus: function(status) {
        this.status = status;
        this.registerStatus();
        return this.status;
    }
    
    //This function is used to check if the user was allowed to access the status endpoint
    , isLoadedAndAuthenticated: function() {
        this.consoleLog('isLoadedAndAuthenticated()');        
        var lastStatus = this.getStatus();            
        if (lastStatus === null) {
            return false;
        } else {
            var statusObj = Ext.JSON.decode(lastStatus, true);
            if (statusObj !== null && statusObj.bootdate !== undefined && parseInt(statusObj.bootdate) > 0) {
                return true;
            } else {
                return false;
            }            
        }        
    }    
    

    , loadStatus: function() {
        this.consoleLog('loadStatus()');
        var scope = this;
        if (this.getStatusLoading() !== true) {
            this.setStatusLoading(true);
            var serverUrl = '/' + symfonyEnv + '/status';
            var initTimestamp = new Date().getTime()
            Ext.Ajax.request({
                url: serverUrl,
                timeout: 10000,
                success: function(response){
                    var text = response.responseText;
                    //scope.consoleLog('loadStatus(): ' + response.responseText, 'info');
                    var successTimestamp = new Date().getTime();
                    var latency = successTimestamp - initTimestamp;
                    scope.consoleLog('loadStatus(): Latency: ' + latency + 'ms');
                    //var serverResonse = Ext.decode(response.responseText, true);
                    scope.setStatus(response.responseText);
                    scope.setStatusLoading(false);
                 },
                failure: function(response, opts) {
                    var successTimestamp = new Date().getTime();
                    var latency = successTimestamp - initTimestamp;
                    
                    if (parseInt(response.status) == 0) {
                        scope.consoleLog('loadStatus(): Error loading status: Server not available', 'warn');
                    } else {
                        scope.consoleLog('loadStatus(): Error loading status: ' + response.status, 'warn');                        
                    }
                    scope.setStatusLoading(false);
                }
            });
        }                
    }
    
    , registerStatus: function() {
        this.consoleLog('registerStatus()');
        var scope = this;        
        //this.consoleLog('registerStatus(): Number of records: ' + this.getDashboardStatusStore().getCount());
        if (this.getDashboardStatusStore().getCount() > 20) {
            var recordsToDelete = this.getDashboardStatusStore().getCount() - 20;
            //this.consoleLog('registerStatus(): Records to Delete: ' + recordsToDelete);
            this.getDashboardStatusStore().removeAt(0, recordsToDelete);
        }
        //this.consoleLog('registerStatus(): Number of records: ' + this.getDashboardStatusStore().getCount());  
        this.getDashboardStatusStore().add({STATUS: scope.getStatus()});
        setTimeout(function() {
            scope.fireCardsUpdate();
        },100);         
    }
    
    //Send an update event to all cards controllers
    , fireCardsUpdate: function() {
        this.consoleLog('fireCardsUpdate()');
        this.fireEvent('WPAKT.controller.dashboard.Disk.updateCard');
        this.fireEvent('WPAKT.controller.dashboard.Cameras.updateCard');
        this.fireEvent('WPAKT.controller.dashboard.Uptime.updateCard');
        this.fireEvent('WPAKT.controller.dashboard.SourcesStatus.updateCard');
    }
});