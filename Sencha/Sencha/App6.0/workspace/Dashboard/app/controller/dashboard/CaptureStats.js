//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.controller.dashboard.CaptureStats');
//</debug>
Ext.define('WPAKT.controller.dashboard.CaptureStats', {
    extend: 'Ext.app.Controller'
/*
    , stores: [
        'dashboard.Status'
        , 'dashboard.CaptureStats'
    ]

    , models: [
        'dashboard.Status'
        , 'dashboard.CaptureStats'

    ]


    , views: [
        'dashboard.capturestats.Main'
        , 'dashboard.capturestats.CaptureChart'
    ]

    , refs: [
        {ref: 'dashboardcamerasmain',          selector: 'dashboardcamerasmain'           }
        , {ref: 'dashboardcamerascapturechart',  selector: 'dashboardcamerascapturechart'   }
    ]

    , init: function() {
        this.consoleLog('init()');
        //Clean any URL route, might need to modify this later on
            
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
        var scope = this;
        var currentStatus = this.getDashboardCaptureStatsStore().first()
        if (currentStatus === undefined || currentStatus === null) {
            this.consoleLog('onLaunch() - App not initialized yet');
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-15', y1value: 10, y2value: 50});
            setTimeout(function() {
                scope.onLaunch();
            },100);
        } else {
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-14', y1value: 30, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-13', y1value: 30, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-12', y1value: 30, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-11', y1value: 30, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-10', y1value: 30, y2value: 10});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-09', y1value: 10, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-08', y1value: 30, y2value: 30});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-07', y1value: 70, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-06', y1value: 60, y2value: 40});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-05', y1value: 50, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-04', y1value: 40, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-03', y1value: 100, y2value: 20});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-02', y1value: 10, y2value: 70});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D-01', y1value: 20, y2value: 90});            
            this.getDashboardCaptureStatsStore().add({xvalue: 'D', y1value: 32, y2value: 80});            
        }        

    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Cards->CaptureStats: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }
*/
});
