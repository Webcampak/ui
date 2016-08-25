//<debug>
console.log(new Date().toLocaleTimeString() + ': SyncReports: Load: WPAKD.controller.syncreports.SyncReports');
//</debug>
Ext.define('WPAKD.controller.syncreports.SyncReports', {
    extend: 'Ext.app.Controller'

    , views: [
        'desktop.toolbar.top.Taskbar'
        , 'syncreports.Main'
        , 'syncreports.ReportsList'
        , 'syncreports.ButtonRefresh'
        , 'syncreports.ButtonAdd'
        , 'syncreports.ButtonRerun'
        , 'syncreports.ButtonDelete'
        , 'syncreports.Search'
        , 'syncreports.ToolbarRecords'

        , 'syncreports.reportadd.Main'
        , 'syncreports.reportadd.Name'
        , 'syncreports.reportadd.ButtonSave'
        , 'syncreports.reportadd.ButtonCancel'
        , 'syncreports.reportadd.source.Type'
        , 'syncreports.reportadd.source.FTPServersList'
        , 'syncreports.reportadd.source.SourcesList'
        , 'syncreports.reportadd.destination.Type'
        , 'syncreports.reportadd.destination.FTPServersList'
        , 'syncreports.reportadd.destination.SourcesList'        
       
        , 'syncreports.details.Main'
        , 'syncreports.details.Name'
        , 'syncreports.details.ButtonClose'
        , 'syncreports.details.ButtonXfer'
        , 'syncreports.details.source.Type'
        , 'syncreports.details.source.FTPServersList'
        , 'syncreports.details.source.SourcesList'
        , 'syncreports.details.destination.Type'
        , 'syncreports.details.destination.FTPServersList'
        , 'syncreports.details.destination.SourcesList'
                
        , 'syncreports.details.summary.SummaryList'
        
    ]

    , stores: [
        'shared.Sources'
        , 'syncreports.SyncReports'
        , 'syncreports.DestinationFTPServers'
        , 'syncreports.SourceFTPServers'

        , 'syncreports.DetailsResults'
        
    ]

    , models: [
        'shared.Sources'
        , 'syncreports.SyncReports'
        
        , 'syncreports.DetailsResults'
        
    ]

    , refs: [
        {ref: 'desktopmain',                selector: 'desktopmain'                 }
        , {ref: 'desktoptoolbartoptaskbar', selector: 'desktoptoolbartoptaskbar'    }

        , {ref: 'syncreportsmain',                         selector: 'syncreportsmain',             autoCreate: true,   xtype: 'syncreportsmain'}
        , {ref: 'syncreportsreportslist',                  selector: 'syncreportsreportslist'       }
        , {ref: 'syncreportsbuttonrefresh',                selector: 'syncreportsbuttonrefresh'     }
        , {ref: 'syncreportsbuttonadd',                    selector: 'syncreportsbuttonadd'         }
        , {ref: 'syncreportsbuttonrerun',                  selector: 'syncreportsbuttonrerun'       }
        , {ref: 'syncreportsbuttondelete',                 selector: 'syncreportsbuttondelete'      }
        , {ref: 'syncreportssearch',                       selector: 'syncreportssearch'            }
        , {ref: 'syncreportstoolbarrecords',               selector: 'syncreportstoolbarrecords'    }
        
        , {ref: 'syncreportsreportaddmain',                 selector: 'syncreportsreportaddmain',               autoCreate: true,   xtype: 'syncreportsreportaddmain'}
        , {ref: 'syncreportsreportaddname',                 selector: 'syncreportsreportaddname'                }
        , {ref: 'syncreportsreportaddbuttonsave',           selector: 'syncreportsreportaddbuttonsave'          }
        , {ref: 'syncreportsreportaddbuttoncancel',         selector: 'syncreportsreportaddbuttoncancel'        }
        , {ref: 'syncreportsreportaddsourcetype',           selector: 'syncreportsreportaddsourcetype'          }
        , {ref: 'syncreportsreportaddsourceftpserverslist', selector: 'syncreportsreportaddsourceftpserverslist'}
        , {ref: 'syncreportsreportaddsourcesourceslist',    selector: 'syncreportsreportaddsourcesourceslist'   }
        , {ref: 'syncreportsreportadddestinationtype',           selector: 'syncreportsreportadddestinationtype'          }
        , {ref: 'syncreportsreportadddestinationftpserverslist', selector: 'syncreportsreportadddestinationftpserverslist'}
        , {ref: 'syncreportsreportadddestinationsourceslist',    selector: 'syncreportsreportadddestinationsourceslist'   }        
                
        , {ref: 'syncreportsdetailsmain',                       selector: 'syncreportsdetailsmain'                      }
        , {ref: 'syncreportsdetailsname',                       selector: 'syncreportsdetailsname'                      }
        , {ref: 'syncreportsdetailsbuttonclose',                selector: 'syncreportsdetailsbuttonclose'               }        
        , {ref: 'syncreportsdetailsbuttonxfer',                 selector: 'syncreportsdetailsbuttonxfer'                }        
        , {ref: 'syncreportsdetailssourcetype',                 selector: 'syncreportsdetailssourcetype'                }
        , {ref: 'syncreportsdetailssourceftpserverslist',       selector: 'syncreportsdetailssourceftpserverslist'      }
        , {ref: 'syncreportsdetailssourcesourceslist',          selector: 'syncreportsdetailssourcesourceslist'         }
        , {ref: 'syncreportsdetailsdestinationtype',            selector: 'syncreportsdetailsdestinationtype'           }
        , {ref: 'syncreportsdetailsdestinationftpserverslist',  selector: 'syncreportsdetailsdestinationftpserverslist' }
        , {ref: 'syncreportsdetailsdestinationsourceslist',     selector: 'syncreportsdetailsdestinationsourceslist'    }    
        
        , {ref: 'syncreportsdetailssummarysummarylist',         selector: 'syncreportsdetailssummarysummarylist'        }


    ]

    , init: function() {
        this.consoleLog('init()');
        this.control({
            'desktoptoolbartoptaskbar button[action=openWEB_DSP_SYNCREPORTS]':  {click:  this.openSyncReports                 }
            , 'syncreportsmain':                                                {hide:   this.closeSyncReports
                                                                                , minimize: this.openSyncReports
                                                                                , activate:  this.updateTotalReports    
                                                                                }
            , '#menuOpenWEB_DSP_SYNCREPORTS':                                   {click:  this.menuOpenSyncReports             }


            , 'syncreportssearch':                                              {change:   this.searchReports    }

            , 'syncreportsreportslist':                                         {selectionchange:   this.onReportSelected}


            , 'syncreportsdetailsbuttonclose':                                  {click:   this.closeReportDetails  }
            , 'syncreportsdetailsbuttonxfer':                                   {click:   this.reRunAndSyncSelectedReport  }
            
            , 'syncreportsbuttonadd':                                           {click:   this.openAddReportWindow  }
            , 'syncreportsbuttonrerun':                                         {click:   this.reRunSelectedReport  }
            , 'syncreportsbuttondelete':                                        {click:   this.deleteReport         }
            , 'syncreportsbuttonrefresh':                                       {click:   this.reloadSyncReports    }
            , 'syncreportsreportaddbuttoncancel':                               {click:   this.closeReportAdd    }
            , 'syncreportsreportaddbuttonsave':                                 {click:   this.createReport    }
            , 'syncreportsreportaddsourcetype':                                 {change:  this.changeSourceType     }
            , 'syncreportsreportadddestinationtype':                            {change:  this.changeDestinationType}
            , 'syncreportsreportaddsourcesourceslist':                          {change:  this.loadSourceFTPServers }
            , 'syncreportsreportadddestinationsourceslist':                     {change:  this.loadDestinationFTPServers}
        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.syncReports.SyncReports.openSyncReports':            this.openSyncReports
                      , 'WPAKD.controller.syncReports.SyncReports.menuOpenSyncReports':      this.menuOpenSyncReports
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->SyncReports: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }    

    , reRunAndSyncSelectedReport: function() {
        this.consoleLog('reRunAndSyncSelectedReport()');
        var seletedReport = this.getSyncreportsreportslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getSyncreportsSyncReportsStore();
        var scope = this;
        if (seletedReport.get('STATUS') !== 'completed') {
            this.displayWarningMessage(i18n.gettext('You can only re-run a completed report'));                        
        } else if (seletedReport) {            
            Ext.Msg.show({
                title: i18n.gettext('Re-run and Sync Files'),
                msg: i18n.gettext('You are about to re-run a report and sync its files, transferring files might take time ?'),                
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(btn){
                    if(btn === 'yes') {
                        scope.addSyncReport(seletedReport, true);
                    }
                }
            });
        }
    }
    
    , addSyncReport: function(seletedReport, Xfer) {
        this.consoleLog('addSyncReport()');
        this.getSyncreportsSyncReportsStore().add(
            [{
                NAME:               seletedReport.get('NAME')
                , XFER:             Xfer
                , SRC_SOURCEID:     seletedReport.get('SRC_SOURCEID')
                , SRC_TYPE:         seletedReport.get('SRC_TYPE')
                , SRC_FTPSERVERID:  seletedReport.get('SRC_FTPSERVERID')
                , DST_SOURCEID:     seletedReport.get('DST_SOURCEID')
                , DST_TYPE:         seletedReport.get('DST_TYPE')
                , DST_FTPSERVERID:  seletedReport.get('DST_FTPSERVERID')
            }]                    
        );
        this.getSyncreportsSyncReportsStore().on('endupdate',this.createReportSuccess,this,{single:true}); 
    }        

    , reRunSelectedReport: function() {
        this.consoleLog('reRunSelectedReport()');
        var seletedReport = this.getSyncreportsreportslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getSyncreportsSyncReportsStore();
        var scope = this;
        if (seletedReport.get('STATUS') !== 'completed') {
            this.displayWarningMessage(i18n.gettext('You can only re-run a completed report'));                        
        } else if (seletedReport) {
            this.addSyncReport(seletedReport, false);           
        }
    }

    , deleteReport: function() {
        this.consoleLog('deleteReport()');
        var seletedReport = this.getSyncreportsreportslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getSyncreportsSyncReportsStore();
        var scope = this;
        if (seletedReport) {
            if (seletedReport.get('STATUS') == 'process') {
                Ext.MessageBox.show({
                     title: i18n.gettext('Info'),
                     msg: i18n.gettext('A running report cannot be deleted, please wait until completion'),
                     buttons: Ext.MessageBox.OK,
                     icon: Ext.MessageBox.INFO
                });                                
            } else {
                Ext.Msg.show({
                    title: i18n.gettext('Delete Report?'),
                    msg: i18n.gettext('You are deleting a report permanently, this cannot be undone. Proceed ?'),                
                    buttons: Ext.Msg.YESNO,
                    icon: Ext.Msg.QUESTION,
                    fn: function(btn){
                        if(btn === 'yes') {
                            scope.consoleLog('deleteReport: currentStore.remove(selection):');
                            currentStore.remove(seletedReport);
                            currentStore.load();
                        }
                    }
                });                
            }
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext('Info'),
                msg: i18n.gettext('Please select a report first'),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }

    }

    , populateReportDetails: function() {
        this.consoleLog('populateReportDetails()');
        var seletedReport = this.getSyncreportsreportslist().getSelectionModel().getSelection()[0];
        if (seletedReport) {
            this.getSyncreportsdetailsname().setValue(seletedReport.get('NAME'));
            // Source            
            var srcSource = this.getSharedSourcesStore().findRecord('SOURCEID', seletedReport.get('SRC_SOURCEID'), 0, false, false, true);
            if (srcSource) {this.getSyncreportsdetailssourcesourceslist().setValue(srcSource.get('NAME'));}
            else {this.getSyncreportsdetailssourcesourceslist().setValue();}            
            this.getSyncreportsdetailssourcetype().setValue(seletedReport.get('SRC_TYPE'));
            if (seletedReport.get('SRC_TYPE') === 'ftp') {
                this.getSyncreportsdetailssourceftpserverslist().setVisible(true);                
                this.getSyncreportsSourceFTPServersStore().getProxy().setExtraParam('SOURCEID', seletedReport.get('SRC_SOURCEID'));                
                this.getSyncreportsSourceFTPServersStore().on('load',this.populateReportSrcFTPServer,this,{single:true});        
                this.getSyncreportsSourceFTPServersStore().load();                
            } else {
                this.getSyncreportsdetailssourceftpserverslist().setVisible(false);
            } 
            
            // Destination
            var dstSource = this.getSharedSourcesStore().findRecord('SOURCEID', seletedReport.get('DST_SOURCEID'), 0, false, false, true);
            if (dstSource) {this.getSyncreportsdetailsdestinationsourceslist().setValue(dstSource.get('NAME'));}
            else {this.getSyncreportsdetailsdestinationsourceslist().setValue();}            
            this.getSyncreportsdetailsdestinationtype().setValue(seletedReport.get('DST_TYPE'));
            if (seletedReport.get('DST_TYPE') === 'ftp') {
                this.getSyncreportsdetailsdestinationftpserverslist().setVisible(true);                
                this.getSyncreportsDestinationFTPServersStore().getProxy().setExtraParam('SOURCEID', seletedReport.get('DST_SOURCEID'));                
                this.getSyncreportsDestinationFTPServersStore().on('load',this.populateReportDstFTPServer,this,{single:true});        
                this.getSyncreportsDestinationFTPServersStore().load();                
            } else {
                this.getSyncreportsdetailsdestinationftpserverslist().setVisible(false);
            }  
            
            this.getSyncreportsDetailsResultsStore().removeAll();            
            this.getSyncreportsDetailsResultsStore().add([{
                    NAME: i18n.gettext('Source')
                    , FILES_COUNT_TOTAL: seletedReport.get('SRC_RESULT_FILES_COUNT_TOTAL')
                    , FILES_COUNT_JPG: seletedReport.get('SRC_RESULT_FILES_COUNT_JPG')
                    , FILES_COUNT_RAW: seletedReport.get('SRC_RESULT_FILES_COUNT_RAW')
                    , FILES_SIZE_TOTAL: seletedReport.get('SRC_RESULT_FILES_SIZE_TOTAL')
                    , FILES_SIZE_JPG: seletedReport.get('SRC_RESULT_FILES_SIZE_JPG')
                    , FILES_SIZE_RAW: seletedReport.get('SRC_RESULT_FILES_SIZE_RAW')
            }, {
                    NAME: i18n.gettext('Destination')
                    , FILES_COUNT_TOTAL: seletedReport.get('DST_RESULT_FILES_COUNT_TOTAL')
                    , FILES_COUNT_JPG: seletedReport.get('DST_RESULT_FILES_COUNT_JPG')
                    , FILES_COUNT_RAW: seletedReport.get('DST_RESULT_FILES_COUNT_RAW')
                    , FILES_SIZE_TOTAL: seletedReport.get('DST_RESULT_FILES_SIZE_TOTAL')
                    , FILES_SIZE_JPG: seletedReport.get('DST_RESULT_FILES_SIZE_JPG')
                    , FILES_SIZE_RAW: seletedReport.get('DST_RESULT_FILES_SIZE_RAW')               
            }, {
                    NAME: i18n.gettext('Intersection (files available in Source and Destination)')
                    , FILES_COUNT_TOTAL: seletedReport.get('ITR_RESULT_COUNT_TOTAL')
                    , FILES_COUNT_JPG: seletedReport.get('ITR_RESULT_COUNT_JPG')
                    , FILES_COUNT_RAW: seletedReport.get('ITR_RESULT_COUNT_RAW')
                    , FILES_SIZE_TOTAL: seletedReport.get('ITR_RESULT_SIZE_TOTAL')
                    , FILES_SIZE_JPG: seletedReport.get('ITR_RESULT_SIZE_JPG')
                    , FILES_SIZE_RAW: seletedReport.get('ITR_RESULT_SIZE_RAW')                
            }]);   
        }
        
    }
    
    , populateReportSrcFTPServer: function() {
        this.consoleLog('populateReportSrcFTPServer()');
        var seletedReport = this.getSyncreportsreportslist().getSelectionModel().getSelection()[0];
        if (seletedReport) {        
            var srcFTPServer = this.getSyncreportsSourceFTPServersStore().findRecord('ID', seletedReport.get('SRC_FTPSERVERID'), 0, false, false, true);
            if (srcFTPServer) {this.getSyncreportsdetailssourceftpserverslist().setValue(srcFTPServer.get('NAME'));}
            else {this.getSyncreportsdetailssourceftpserverslist().setValue();}
        }
    }

    , populateReportDstFTPServer: function() {
        this.consoleLog('populateReportDstFTPServer()');
        var seletedReport = this.getSyncreportsreportslist().getSelectionModel().getSelection()[0];
        if (seletedReport) {        
            var dstFTPServer = this.getSyncreportsDestinationFTPServersStore().findRecord('ID', seletedReport.get('DST_FTPSERVERID'), 0, false, false, true);
            if (dstFTPServer) {this.getSyncreportsdetailsdestinationftpserverslist().setValue(dstFTPServer.get('NAME'));}
            else {this.getSyncreportsdetailsdestinationftpserverslist().setValue();}
        }
    }    

    , onReportSelected: function() {
        this.consoleLog('onReportSelected()');
        this.getSyncreportsbuttondelete().setDisabled(false);
        this.getSyncreportsbuttonrerun().setDisabled(false);
        this.getSyncreportsdetailsmain().setVisible(true);
        this.populateReportDetails();
     
    }

    , closeReportDetails: function() {
        this.consoleLog('closeReportDetails()');
        this.getSyncreportsreportslist().getSelectionModel().deselectAll();
        this.getSyncreportsbuttondelete().setDisabled(true);
        this.getSyncreportsbuttonrerun().setDisabled(true);
        this.getSyncreportsdetailsmain().setVisible(false);          
    }

    , reloadSyncReports: function() {
        this.consoleLog('reloadSyncReports()');
        this.getSyncreportsreportslist().getSelectionModel().deselectAll();
        this.getSyncreportsbuttondelete().setDisabled(true);
        this.getSyncreportsbuttonrerun().setDisabled(true);
        this.getSyncreportsdetailsmain().setVisible(false);        
        this.getSyncreportsSyncReportsStore().on('load',this.updateTotalReports,this,{single:true});        
        this.getSyncreportsSyncReportsStore().load();
    }

    , updateTotalReports: function() {
        this.consoleLog('updateTotalReports()');
        if (this.getSyncreportstoolbarrecords()) {
            this.getSyncreportstoolbarrecords().setText(i18n.gettext('Total number of records: ') + this.getSyncreportsSyncReportsStore().getTotalCount() );
        }
    }

    , searchReports: function() {
        this.consoleLog('searchReports()');   
        var scope = this;

        this.getSyncreportsbuttondelete().setDisabled(true);
        this.getSyncreportsbuttonrerun().setDisabled(true);
        this.getSyncreportsdetailsmain().setVisible(false);
        
        this.getSyncreportsSyncReportsStore().filterBy(function (record) {
            var currentFilter = scope.getSyncreportssearch().getValue();
            currentFilter = currentFilter.toUpperCase();

            var currentName = record.data.NAME;
            currentName = currentName.toUpperCase();

            var currentSrcName = record.data.SRC_SOURCENAME;
            currentSrcName = currentSrcName.toUpperCase();

             var currentDstName = record.data.DST_SOURCENAME;
            currentDstName = currentDstName.toUpperCase();

            if (currentSrcName.indexOf(currentFilter) !== -1) {return true;}
            else if (currentName.indexOf(currentFilter) !== -1) {return true;}
            else if (currentDstName.indexOf(currentFilter) !== -1) {return true;}
            else {return false;}
        });
        if (this.getSyncreportssearch().getValue() == null) {
            this.getSyncreportstoolbarrecords().setText(i18n.gettext('Total number of records: ') + this.getSyncreportsSyncReportsStore().getTotalCount() );
        } else {
            this.getSyncreportstoolbarrecords().setText(i18n.gettext('Number of filtered records: ') + this.getSyncreportsSyncReportsStore().getCount() + ' (' + i18n.gettext('Total') + ': ' + this.getSyncreportsSyncReportsStore().getTotalCount() + ')');
        }
    }        


    , closeReportAdd: function() {
        this.consoleLog('closeReportAdd()');        
        this.getSyncreportsreportaddmain().setVisible(false);
        this.clearReportFields();
    }

    , clearReportFields: function() {
        this.consoleLog('clearReportFields()');
        if (this.getSyncreportsreportaddsourcesourceslist() !== undefined ) {
            this.getSyncreportsreportaddsourcesourceslist().setValue();
            this.getSyncreportsreportaddsourcetype().setValue();
            this.getSyncreportsreportaddsourceftpserverslist().setValue();
            this.getSyncreportsreportadddestinationsourceslist().setValue();
            this.getSyncreportsreportadddestinationtype().setValue();
            this.getSyncreportsreportadddestinationftpserverslist().setValue();     
        }
    }    

    , displayWarningMessage: function(msg) {
        this.consoleLog('displayWarningMessage()');
        Ext.MessageBox.show({
            title: i18n.gettext('Warning'),
            msg: msg,
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.WARNING
        });          
    }

    , createReport: function() {
        this.consoleLog('createReport()');
        
        var srcConfigString = this.getSyncreportsreportaddsourcesourceslist().getValue() + '-' + this.getSyncreportsreportaddsourcetype().getValue() + '-'+ this.getSyncreportsreportaddsourceftpserverslist().getValue();
        var dstConfigString = this.getSyncreportsreportadddestinationsourceslist().getValue() + '-' + this.getSyncreportsreportadddestinationtype().getValue() + '-'+ this.getSyncreportsreportadddestinationftpserverslist().getValue();

        if (this.getSyncreportsreportaddsourcesourceslist().getValue() === null 
                || this.getSyncreportsreportadddestinationsourceslist().getValue() === null
                || this.getSyncreportsreportaddsourcetype().getValue() === null
                || this.getSyncreportsreportadddestinationtype().getValue() === null
                ) {
            this.displayWarningMessage(i18n.gettext('Source and type fields are mandatory'));            
        } else if (this.getSyncreportsreportaddsourcetype().getValue() === 'ftp' && this.getSyncreportsreportaddsourceftpserverslist().getValue() === null) {
            this.displayWarningMessage(i18n.gettext('Please select a FTP server for the source')); 
        } else if (this.getSyncreportsreportadddestinationtype().getValue() === 'ftp' && this.getSyncreportsreportadddestinationftpserverslist().getValue() === null) {
            this.displayWarningMessage(i18n.gettext('Please select a FTP server for the destination'));     
        } else if (srcConfigString === dstConfigString) {
            this.displayWarningMessage(i18n.gettext('A source cannot be synced with itself'));            
        } else {
            this.getSyncreportsSyncReportsStore().add(
                [{
                    NAME:               this.getSyncreportsreportaddname().getValue()
                    , XFER:             false
                    , SRC_SOURCEID:     this.getSyncreportsreportaddsourcesourceslist().getValue()
                    , SRC_TYPE:         this.getSyncreportsreportaddsourcetype().getValue()
                    , SRC_FTPSERVERID:  this.getSyncreportsreportaddsourceftpserverslist().getValue()
                    , DST_SOURCEID:     this.getSyncreportsreportadddestinationsourceslist().getValue()
                    , DST_TYPE:         this.getSyncreportsreportadddestinationtype().getValue()
                    , DST_FTPSERVERID:    this.getSyncreportsreportadddestinationftpserverslist().getValue()
                }]
            );
            this.getSyncreportsSyncReportsStore().on('endupdate',this.createReportSuccess,this,{single:true});            
        }
    }    
    
    , createReportSuccess: function() {
        this.consoleLog('createReportSuccess()');
        Ext.MessageBox.show({
            title: i18n.gettext('Info'),
            msg: i18n.gettext('Report added to queue, it will be processed shortly'),
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.INFO
        });        
        this.clearReportFields();
        this.getSyncreportsreportaddmain().setVisible(false); 
        this.getSyncreportsSyncReportsStore().load();        
    }

    , loadSourceFTPServers: function() {
        this.consoleLog('loadSourceFTPServers()');
        var currentSourceId = this.getSyncreportsreportaddsourcesourceslist().getValue();
        var currentType = this.getSyncreportsreportaddsourcetype().getValue();
        if (parseInt(currentSourceId) > 0 && currentType === 'ftp') {
            if (this.getSyncreportsreportaddsourceftpserverslist().getValue() !== null) {
                this.getSyncreportsreportaddsourceftpserverslist().setValue();
            }
            this.getSyncreportsreportaddsourceftpserverslist().setLoading(true);
            this.getSyncreportsSourceFTPServersStore().getProxy().setExtraParam('SOURCEID', currentSourceId);
            this.getSyncreportsSourceFTPServersStore().load();          
            this.getSyncreportsSourceFTPServersStore().on('load',this.sourceFTPServersLoaded,this,{single:true});
            
        }        
    }
    , sourceFTPServersLoaded: function() {
        this.consoleLog('sourceFTPServersLoaded()');
        this.getSyncreportsreportaddsourceftpserverslist().setLoading(false);
    }
    
    , changeSourceType: function(scope, newValue, oldValue, eOpts) {
        this.consoleLog('changeSourceType()');
        if (newValue !== null) {
            if (newValue === 'ftp') {
                this.getSyncreportsreportaddsourceftpserverslist().setVisible(true);                
            } else if (newValue === 'filesystem') {
                this.getSyncreportsreportaddsourceftpserverslist().setVisible(false);                
            }            
        } else {
            this.getSyncreportsreportaddsourceftpserverslist().setVisible(false);                
        }
        this.loadSourceFTPServers();
    }
    
    , loadDestinationFTPServers: function() {
        this.consoleLog('loadDestinationFTPServers()');
        var currentSourceId = this.getSyncreportsreportadddestinationsourceslist().getValue();
        var currentType = this.getSyncreportsreportadddestinationtype().getValue();
        if (parseInt(currentSourceId) > 0 && currentType === 'ftp') {
            if (this.getSyncreportsreportadddestinationftpserverslist().getValue() !== null) {
                this.getSyncreportsreportadddestinationftpserverslist().setValue();
            }
            this.getSyncreportsreportadddestinationftpserverslist().setLoading(true);
            this.getSyncreportsDestinationFTPServersStore().getProxy().setExtraParam('SOURCEID', currentSourceId);
            this.getSyncreportsDestinationFTPServersStore().load();          
            this.getSyncreportsDestinationFTPServersStore().on('load',this.destinationFTPServersLoaded,this,{single:true});
            
        }        
    }
    , destinationFTPServersLoaded: function() {
        this.consoleLog('destinationFTPServersLoaded()');
        this.getSyncreportsreportadddestinationftpserverslist().setLoading(false);
    }   
    
    , changeDestinationType: function(scope, newValue, oldValue, eOpts) {
        this.consoleLog('changeDestinationType()');
        if (newValue !== null) {
            if(newValue === 'ftp') {
                this.getSyncreportsreportadddestinationftpserverslist().setVisible(true);                
            } else if (newValue === 'filesystem') {
                this.getSyncreportsreportadddestinationftpserverslist().setVisible(false);                
            }            
        } else {
            this.getSyncreportsreportadddestinationftpserverslist().setVisible(false);                
        }
        this.loadDestinationFTPServers();        
    }    
    
    , openAddReportWindow: function() {
        this.consoleLog('openAddReportWindow()');
        this.getSyncreportsreportaddmain().show();
    }

    , menuOpenSyncReports: function() {
        this.consoleLog('menuOpenSyncReports()');
        Ext.getBody().mask('Please wait, fetching initial content from database ...');

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),                           action: 'REFRESH'});
        requiredStores.push({store: this.getSyncreportsSyncReportsStore(),                  action: 'REFRESH'});

        this.fireEvent('WPAKD.controller.desktop.loading.Stores.beginLoading'
            , 'WEB_DSP_SYNCREPORTS'
            , 'WPAKD.controller.syncReports.SyncReports.openSyncReports'
            , requiredStores);

        var applicationName = 'WEB_DSP_SYNCREPORTS';
        this.fireEvent('WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats', applicationName);
    },

    openSyncReports: function(key) {
        this.consoleLog('openSyncReports()');
        Ext.getBody().unmask();
        if(this.getSyncreportsmain().isVisible() && Ext.WindowManager.getActive().getId() != this.getSyncreportsmain().getId()) {
            this.consoleLog('openSyncReports(): getSyncreportsmain().toFront()');
            this.getSyncreportsmain().toFront();
        } else if(!this.getSyncreportsmain().isVisible()) {
            this.consoleLog('openSyncReports(): getSyncreportsmain().setVisible(true)');
            this.getDesktopmain().add(this.getSyncreportsmain());
            this.getSyncreportsmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent('tbsyncreports').setVisible(true);
            //this.setVisibleElements();
        } else {
            this.consoleLog('openSyncReports(): getSyncreportsmain().setVisible(false)');
            this.getSyncreportsmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent('tbsyncreports').setVisible(true);
        }
    },

    closeSyncReports: function(key) {
        this.consoleLog('closeSyncReports()');
        this.getDesktoptoolbartoptaskbar().getComponent('tbsyncreports').setVisible(false);
    }

});
