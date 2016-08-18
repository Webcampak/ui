//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.controller.core.ServerAvailability');
//</debug>
Ext.define('WPAKT.controller.core.ServerAvailability', {
    extend: 'Ext.app.Controller'

    , stores: [
        'core.ServerAvailability'
        , 'core.authentication.Users'

    ]

    , models: [
        'core.ServerAvailability'
        , 'core.authentication.Users'

    ]

    , views: [

    ]

    , refs: [

    ]

    , init: function() {
        this.consoleLog('init()');
        this.listen({
             controller: {
                  '*': {
                      'WPAKT.controller.core.ServerAvailability.isOnline': this.isOnline
                      , 'WPAKT.controller.core.ServerAvailability.checkOnlineStatus': this.checkOnlineStatus
                  }
             },
             store: {
                  '*': {
                      'WPAKT.controller.core.ServerAvailability.isOnline': this.isOnline
                  }
             }

        });            
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
        var scope = this;
        if (this.getCoreServerAvailabilityStore().last() === undefined || this.getCoreServerAvailabilityStore().last() === null) {
            this.consoleLog('onLaunch() - App not initialized yet');
            this.getCoreServerAvailabilityStore().add({CODE: 'ONLINE', MSG: 'Launching app', LATENCY: 0});
            setTimeout(function() {
                scope.onLaunch();
            },100);
        } else {
            scope.checkOnlineStatus();
            var interval = setInterval(function() {
                scope.checkOnlineStatus();
            }, 30000); //Check online every 30s                       
        }        
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Dashboard->ServerAvailability: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    // Setters and getters for loading availability
    , getAvailabilityLoading: function() {
        if (this.availabilityLoading === undefined) {this.setAvailabilityLoading(false);}
        return this.availabilityLoading;
    }

    , setAvailabilityLoading: function(availabilityLoading) {
        this.availabilityLoading = availabilityLoading;
        return this.availabilityLoading;
    }

    , isAvailabilityLoading: function() {
        this.consoleLog('isAvailabilityLoading()');
        return this.getAvailabilityLoading();
    }

    // Setters and getters for availability values
    , getAvailability: function() {
        if (this.availability === undefined) {this.setAvailability({});}
        return this.availability;
    }
    , setAvailability: function(availability) {
        this.availability = availability;
        this.registerServerAvailability();
        return this.availability;
    }  
    
    , getLatency: function() {
        if (this.latency === undefined) {this.setLatency(0);}
        return this.latency;
    }
    , setLatency: function(latency) {
        this.latency = latency;
        return this.latency;
    }      

    , registerServerAvailability: function() {
        this.consoleLog('registerServerAvailability()');
        var scope = this;        
        if (this.getCoreServerAvailabilityStore().getCount() > 20) {
            var recordsToDelete = this.getCoreServerAvailabilityStore().getCount() - 20;
            this.getCoreServerAvailabilityStore().removeAt(0, recordsToDelete);
        }
        
        var serverResponse = Ext.decode(scope.getAvailability(), true)
            , serverLatency = this.getLatency()
            , serverUserAuthenticated =  'N'                    
            , serverUsername =  ''                     
            , serverMsg =  ''
            , serverCode = '';      
        if (serverResponse === null) {
            var serverCode = 'OFFLINE';
            var rawServerResponse = scope.getAvailability();
            if(rawServerResponse.length() > 500) {var serverMsg = rawServerResponse.substring(0, 500);} 
            else {var serverMsg = rawServerResponse}
        } else {
            var serverCode = 'ONLINE';
            var serverMsg = serverResponse.message;
            if (serverResponse.status == 'AUTHENTICATED') {
                var serverUsername =  serverResponse.USERNAME;
                var serverUserAuthenticated =  'Y';
            }
        }         
        this.getCoreServerAvailabilityStore().add({
            CODE: serverCode
            , MSG: serverMsg
            , LATENCY: serverLatency
            , USERNAME: serverUsername
            , AUTHENTICATED: serverUserAuthenticated
        });
    }

    , checkOnlineStatus: function() {
        this.consoleLog('checkOnlineStatus()');
        var scope = this;

        //if (this.callInProgress !== true) {
        if (this.getAvailabilityLoading() !== true) {            
            var serverUrl = '/' + symfonyEnv + '/onlinestatus';
            var initTimestamp = new Date().getTime()
            this.setAvailabilityLoading(true);            
            this.fireEvent('WPAKT.controller.core.BackgroundActivities.startAjaxLoading');
            Ext.Ajax.request({
                url: serverUrl,
                timeout: 10000,
                success: function(response){
                    scope.fireEvent('WPAKT.controller.core.BackgroundActivities.endAjaxLoading');
                    scope.consoleLog('checkOnlineStatus(): ' + response.responseText, 'info');                    
                    var text = response.responseText;
                    var successTimestamp = new Date().getTime();
                    var latency = successTimestamp - initTimestamp;
                    scope.setLatency(latency);
                    scope.consoleLog('checkOnlineStatus(): Latency: ' + latency + 'ms');
                    scope.setAvailability(response.responseText);
                    scope.setAvailabilityLoading(false);                    
                 },
                failure: function(response, opts) {
                    scope.fireEvent('WPAKT.controller.core.BackgroundActivities.endAjaxLoading');
                    var successTimestamp = new Date().getTime();
                    var latency = successTimestamp - initTimestamp;                    
                    if (parseInt(response.status) == 0) {
                        scope.consoleLog('checkOnlineStatus(): Error loading status: Server not available', 'warn');
                    } else {
                        scope.consoleLog('checkOnlineStatus(): Error loading status: ' + response.status, 'warn');                        
                    }
                    scope.setAvailability(null);                    
                    scope.setAvailabilityLoading(false);
                }
            });
        }
    }

    , isOnline: function(warning) {
        this.consoleLog('isOnline()');
        var currentStatus = this.getCoreServerAvailabilityStore().last();
        if (currentStatus.get('CODE') == 'ONLINE') {
            return true;
        } else {
            if (warning == true) {
                Ext.MessageBox.show({
                    title: i18n.gettext('Unable to communicate with server'),
                    msg: i18n.gettext('Webcampak app appears to be offline, please try again later<br />You can check online/offline status in the bottom right corner of your window'),
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
            return false;
        }
    }
});