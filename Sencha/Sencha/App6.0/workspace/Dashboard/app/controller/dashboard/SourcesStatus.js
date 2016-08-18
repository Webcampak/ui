//<debug>
/*
 * This class takes care of updating the sources widget displayed on the dashboard.
 * It gets its values from the status endpoint, periodically updated into the status store.
 * 
 * It loop through all sources and update various components of the widget. 
 * 
 */
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.controller.dashboard.SourcesStatus');
//</debug>
Ext.define('WPAKT.controller.dashboard.SourcesStatus', {
    extend: 'Ext.app.Controller'

    , stores: [
        'dashboard.Status'
        , 'dashboard.LastPictures'
    ]

    , models: [
        'dashboard.Status'
        , 'dashboard.LastPictures'
    ]

    , views: [
        'core.Main'        
        , 'core.toolbar.Navicon'
        , 'dashboard.sourcesstatus.Main'
        , 'dashboard.sourcesstatus.SourceStatus'
        , 'dashboard.sourcesstatus.RefreshTool'
    ]

    , refs: [
        {ref: 'coremain',                              selector: 'coremain'                           }
        , {ref: 'coretoolbarnavicon',                  selector: 'coretoolbarnavicon'                 }
        , {ref: 'dashboardsourcesstatusmain',          selector: 'dashboardsourcesstatusmain'         }
        , {ref: 'dashboardsourcesstatusrefreshtool',   selector: 'dashboardsourcesstatusrefreshtool'  }
    ]

    , init: function() {
        this.consoleLog('init()');
        this.control({           
            'dashboardsourcesstatusrefreshtool':    {click: this.refreshSourcesStatus}
        });         
        this.listen({
             controller: {
                  '*': {
                    'WPAKT.controller.dashboard.SourcesStatus.updateCard': this.updateCard                    
                  }
             }
        });        

    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');

    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Cards->SourcesStatus: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , clickPicture: function(sourceid) {
        this.consoleLog('clickPicture(): ' + sourceid);
        
    }

    , refreshSourcesStatus: function() {
        this.consoleLog('onLaunch()');
        this.fireEvent('WPAKT.controller.dashboard.Status.loadStatus');
    }    

    , updateCard: function() {
        this.consoleLog('updateCard()');
        var scope = this;
        if (this.getDashboardsourcesstatusmain() !== undefined && this.getDashboardsourcesstatusmain().isVisible()) {
            var lastStatus = this.getDashboardStatusStore().last().get('STATUS');
            var statusObj = Ext.JSON.decode(lastStatus, true);
            if (statusObj !== null && statusObj.sources !== undefined && statusObj.sources.length > 0) {
                var componentsItems = this.getDashboardsourcesstatusmain().items;
                Ext.suspendLayouts();
                Ext.Array.each(statusObj.sources, function(sourceObj, index) {
                    var currentSourceComponent = undefined;
                    Ext.Array.each(componentsItems.items, function(sourceComponent, index) {
                        if (sourceComponent.sourceid !== undefined && sourceComponent.sourceid == sourceObj.SOURCEID) {
                            currentSourceComponent = sourceComponent;
                        }
                    });
                    if (currentSourceComponent === undefined) {
                        currentSourceComponent = Ext.create('WPAKT.view.dashboard.sourcesstatus.SourceStatus', {sourceid: sourceObj.SOURCEID});
                        scope.getDashboardsourcesstatusmain().add(currentSourceComponent);
                    }
                    scope.updateSourceComponent(currentSourceComponent, sourceObj);
                });
                Ext.resumeLayouts(true);
                this.consoleLog('updateCard() - Updating sources status');
            }
        }        
    }

    , updateSourceComponent: function(sourceComponent, sourceData) {
        this.consoleLog('updateSourceComponent()');
                
        //Source Name
        sourceComponent.queryById('sourceName').setHtml(sourceData.NAME);
        
        //Source Thumbnail    
        if (sourceData.capture.last !== false) {
            var currentURL = '/' + symfonyEnv + '/dl/source' + sourceData.SOURCEID + '/pictures/' + sourceData.capture.last.filename.substring(0, 8) + '/' + sourceData.capture.last.filename + '?width=150';        
            var sourceLastImage = sourceComponent.queryById('sourceLastImage');            
            sourceLastImage.setSrc(currentURL);  
            sourceLastImage.config.sourceid = sourceData.SOURCEID; 
        } else {
            sourceComponent.queryById('sourceLastImage').setSrc();
        }
                
        //Source Capture
        if (sourceData.capture.next === false) {
            sourceData.capture.next = '<i>' + i18n.gettext('Not Available') + '</i>';
        } else {
            sourceData.capture.next = Ext.Date.format(new Date(sourceData.capture.next.date), "Y-m-d H:i:s");  
        }
        if (sourceData.capture.last === false) {
            sourceData.capture.last = '<i>' + i18n.gettext('Not Available') + '</i>';
        } else {
            sourceData.capture.last = Ext.Date.format(new Date(sourceData.capture.last.date), "Y-m-d H:i:s");  
        }
        sourceComponent.queryById('captureStatus').setData({
                        last: sourceData.capture.last
                        , next: sourceData.capture.next
                    });
        //
        //Capture Rate         
        sourceComponent.queryById('captureRate').setData({rate: sourceData.capture.rate});
                    
        // Disk Usage
        if (sourceData.disk !== false) {
            sourceComponent.queryById('diskUsageTxt').setData({
                            disk: Ext.util.Format.fileSize(sourceData.disk.Used)
                            , percent: Math.round(sourceData.disk.Used / sourceData.disk.Total) * 100
                        });
            sourceComponent.queryById('diskUsageBar').setValue(sourceData.disk.Used / sourceData.disk.Total);   
            /*
            if (sourceData.disk.Free < 0) {sourceData.disk.Free = 0}
            sourceComponent.queryById('diskFreeTxt').setData({
                            disk: Ext.util.Format.fileSize(sourceData.disk.Free)
                            , percent: Math.round(sourceData.disk.Free / sourceData.disk.Total) * 100
                        });
            sourceComponent.queryById('diskFreeBar').setValue(sourceData.disk.Free / sourceData.disk.Total);  
            */
        }
                
        // Graph displaying pictures per day       
        if (sourceData.history.count.length > 0) {
            var graphPicturesDay = sourceComponent.queryById('graphPicturesDay');
            var graphPicturesDayStore = graphPicturesDay.getStore();
            graphPicturesDayStore.setData(sourceData.history.count);            
        }
        
        // Graph displaying total disk usage per day for the source       
        if (sourceData.history.size.length > 0) {
            var graphSizeDay = sourceComponent.queryById('graphSizeDay');
            var graphSizeDayStore = graphSizeDay.getStore();
            graphSizeDayStore.setData(sourceData.history.size);            
        }
        
        
        
    }

    , loadWidget: function() {
        this.consoleLog('loadWidget()');
        
        /*
        var scope = this;
        this.getDashboardLastPicturesStore().each(function (record) {            
            scope.consoleLog('loadWidget(): Processing source: ' + record.get('SOURCENAME'));
            var pictureWidget = Ext.create('WPAKT.view.dashboard.sourcesstatus.thumb.Picture');
            pictureWidget.setSrc(record.get('URL'));      
            var textWidget = Ext.create('WPAKT.view.dashboard.sourcesstatus.thumb.Text');
            textWidget.setHtml(record.get('SOURCENAME') + '<br />' + record.get('DATE'))   
            var widgetContainer = Ext.create('WPAKT.view.dashboard.sourcesstatus.thumb.Main');
            widgetContainer.add(pictureWidget);
            widgetContainer.add(textWidget);
            scope.getDashboardsourcesstatusmain().add(widgetContainer);
        });
*/

    }
});
