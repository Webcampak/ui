//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.desktop.ServerAvailability');
//</debug>
Ext.define('WPAKD.controller.desktop.ServerAvailability', {
    extend: 'Ext.app.Controller',

    stores: [
        'desktop.ServerAvailability'
        , 'desktop.authentication.Users'

    ],

    models: [
        'desktop.ServerAvailability'
        , 'desktop.authentication.Users'

    ],

    views: [
        'desktop.toolbar.top.DesktopConfig'

    ],

    refs: [
        {ref: 'desktoptoolbartopdesktopconfig',   selector: 'desktoptoolbartopdesktopconfig'  }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Controller->Desktop->ServerAvailability: Controller init: function()');
        this.control({

        });
        this.listen({
             controller: {
                  '*': {
                      'WPAKD.controller.desktop.ServerAvailability.isOnline': this.isOnline
                      , 'WPAKD.controller.desktop.ServerAvailability.checkOnlineStatus': this.checkOnlineStatus
                  }
             },
             store: {
                  '*': {
                      'WPAKD.controller.desktop.ServerAvailability.isOnline': this.isOnline
                  }
             }

        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
        this.getDesktopServerAvailabilityStore().add({CODE: 'ONLINE', MSG: 'Launching app', LATENCY: 0});
        var scope = this;
        var interval = setInterval(function() {
            scope.checkOnlineStatus();
        }, 30000); //
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Desktop->ServerAvailability: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , checkOnlineStatus: function(init) {
        this.consoleLog('checkOnlineStatus()');

        if (init !== undefined) {
            this.consoleLog('checkOnlineStatus(): checkOnlineStatus() - INIT: ' + init);
        }
        //If init == true, it means that's it's the first checkOnlineStatus call made by the app, it is also used to determine whether the login box should be displayed or not

        var scope = this;
        if (this.callInProgress !== true) {
//                console.log(new Date().toLocaleTimeString() + ': Controller->Desktop->ServerAvailability: onLaunch(): Server Activity check');
            var serverUrl = window.location.href;
            var serverUrl = serverUrl.replace('mobile','');
            var serverUrl = serverUrl + '/../onlinestatus';
            var initTimestamp = new Date().getTime()
            this.callInProgress = true;
            var currentStatus = this.getDesktopServerAvailabilityStore().first();
            var currentUser = this.getDesktopAuthenticationUsersStore().first();
            this.fireEvent('WPAKD.controller.desktop.BackgroundActivities.startAjaxLoading');
            Ext.Ajax.request({
                url: serverUrl,
                timeout: 10000,
                success: function(response){
                    scope.fireEvent('WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading');
                    var text = response.responseText;
                    scope.consoleLog('checkOnlineStatus(): ' + response.responseText, 'info');
                    var successTimestamp = new Date().getTime();
                    var latency = successTimestamp - initTimestamp;
                    scope.consoleLog('checkOnlineStatus(): Latency: ' + latency + 'ms');
                    var serverResonse = Ext.decode(response.responseText, true);
                    if (serverResonse === null) {
                        currentStatus.set('CODE', 'OFFLINE');
                        if(response.responseText.length() > 500) {
                            currentStatus.set('MSG', response.responseText.substring(0, 500));
                        } else {
                            currentStatus.set('MSG', response.responseText);
                        }
                        currentStatus.set('LATENCY', 0);
                    } else {
                        currentStatus.set('CODE', 'ONLINE');
                        currentStatus.set('MSG', serverResonse.message);
                        currentStatus.set('LATENCY', latency);
                        if (serverResonse.status == 'AUTHENTICATED') {
                            currentUser.set('USERNAME', serverResonse.USERNAME);
                            currentUser.set('AUTHENTICATED', 'Y');
                        } else if ((serverResonse.status == 'NOTAUTHENTICATED' || serverResonse.status == 'SESSIONMISTMATCH') && currentUser.get('USERNAME') != '') {
                            scope.fireEvent('WPAKD.controller.desktop.Authentication.displayLoginWindow');
                            //scope.fireEvent('WPAKD.controller.desktop.Authentication.doReAuthenticate');
                        }
                    }
                    scope.fireEvent('WPAKD.controller.desktop.toolbar.Bottom.updateStatusButtons');
                    if (init == true) {
                        scope.fireEvent('WPAKD.controller.desktop.Authentication.displayLoginWindow');
                    } else if (serverResonse.status == 'NOTAUTHENTICATED' && currentUser.get('AUTHENTICATED') == 'Y') {
                        scope.fireEvent('WPAKD.controller.desktop.Authentication.userLoggedOffOnServer');
                        currentUser.set('AUTHENTICATED', 'N');
                    }
                    scope.callInProgress = false;
                 },
                failure: function(response, opts) {
                    scope.fireEvent('WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading');
                    //console.log('server-side failure with status code ' + response.status);
                    var successTimestamp = new Date().getTime();
                    var latency = successTimestamp - initTimestamp;
                    if (parseInt(response.status) == 0) {
                        currentStatus.set('MSG', 'Remote server not available');
                    } else {
                        currentStatus.set('MSG', response.status);
                    }
                    scope.consoleLog('checkOnlineStatus():', 'error', response);
                    currentStatus.set('CODE', 'OFFLINE');
                    currentStatus.set('LATENCY', latency);
                    scope.fireEvent('WPAKD.controller.desktop.toolbar.Bottom.updateStatusButtons');
                    scope.callInProgress = false;
                }
            });
        }
    },

    isOnline: function(warning) {
        this.consoleLog('isOnline()');
        var currentStatus = this.getDesktopServerAvailabilityStore().first();
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