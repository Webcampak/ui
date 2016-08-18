//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.sourcesconfiguration.capture.Capture');
//</debug>
Ext.define('WPAKD.controller.sourcesconfiguration.capture.Capture', {
    extend: 'Ext.app.Controller',

    views: [
        'sourcesconfiguration.capture.Main'
        , 'sourcesconfiguration.capture.source.Main'
        , 'sourcesconfiguration.capture.source.Cfgsourceactive'
        , 'sourcesconfiguration.capture.source.Cfgsourcetype'
        , 'sourcesconfiguration.capture.source.Cfgprocessraw'
        , 'sourcesconfiguration.capture.source.Cfgcroncapturevalue'
        , 'sourcesconfiguration.capture.source.Cfgcroncaptureinterval'
        , 'sourcesconfiguration.capture.source.Cfgminimumcapturevalue'
        , 'sourcesconfiguration.capture.source.Cfgminimumcaptureinterval'
        , 'sourcesconfiguration.capture.source.Cfgcapturedelayinterval'
        , 'sourcesconfiguration.capture.source.Cfgcapturedelay'
        , 'sourcesconfiguration.capture.source.Cfgcapturedelaydate'
        , 'sourcesconfiguration.capture.source.Cfgcapturetimezone'
        , 'sourcesconfiguration.capture.source.Cfgsourcelanguage'
        , 'sourcesconfiguration.capture.source.Cfgemailerroractivate'
        , 'sourcesconfiguration.capture.source.Cfgsourcedebug'
        , 'sourcesconfiguration.capture.source.Cfgnocapture'
        //, 'sourcesconfiguration.capture.source.Cfgenablexfer'

        , 'sourcesconfiguration.capture.calendar.Main'
        , 'sourcesconfiguration.capture.calendar.Cfgcroncalendar'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturedayenable1'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendhour1'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendminute1'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestarthour1'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestartminute1'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturedayenable2'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendhour2'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendminute2'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestarthour2'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestartminute2'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturedayenable3'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendhour3'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendminute3'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestarthour3'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestartminute3'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturedayenable4'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendhour4'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendminute4'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestarthour4'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestartminute4'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturedayenable5'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendhour5'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendminute5'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestarthour5'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestartminute5'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturedayenable6'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendhour6'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendminute6'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestarthour6'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestartminute6'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturedayenable7'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendhour7'
        , 'sourcesconfiguration.capture.calendar.Cfgcaptureendminute7'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestarthour7'
        , 'sourcesconfiguration.capture.calendar.Cfgcapturestartminute7'

        , 'sourcesconfiguration.capture.gphoto.Main'
        , 'sourcesconfiguration.capture.gphoto.Cfgsourcegphotocameramodel'
        , 'sourcesconfiguration.capture.gphoto.Cfgsourcegphotocameraportdetail'
        , 'sourcesconfiguration.capture.gphoto.Cfgsourcegphotoowner'

        , 'sourcesconfiguration.capture.webcampak.Main'
        , 'sourcesconfiguration.capture.webcampak.Cfgsourcewpakgetsourceid'
        , 'sourcesconfiguration.capture.webcampak.Cfgsourcewpaktype'

        , 'sourcesconfiguration.capture.ipcamera.Main'
        , 'sourcesconfiguration.capture.ipcamera.Cfgsourcecamiptemplate'
        , 'sourcesconfiguration.capture.ipcamera.Cfgsourcecamiplimiterotation'
        , 'sourcesconfiguration.capture.ipcamera.Cfgsourcecamiphotlinkerror'

        , 'sourcesconfiguration.capture.link.Main'
        , 'sourcesconfiguration.capture.link.Cfgsourcewebfileurl'

        , 'sourcesconfiguration.capture.phidget.Main'
        , 'sourcesconfiguration.capture.phidget.PhidgetsPortsList'
        , 'sourcesconfiguration.capture.phidget.SensorsList'

    ],

    stores: [
        'shared.Sources'
        , 'shared.Timezones'
        , 'shared.UsbPorts'
        , 'shared.CameraModels'

        , 'sourcesconfiguration.Capture'
        , 'sourcesconfiguration.SectionCapture'
        , 'sourcesconfiguration.ConfigurationTabs'
        , 'sourcesconfiguration.PhidgetPorts'

    ],

    models: [
        'shared.Sources'
        , 'shared.Timezones'
        , 'shared.UsbPorts'
        , 'shared.CameraModels'

        , 'sourcesconfiguration.Capture'
        , 'sourcesconfiguration.SectionCapture'
        , 'sourcesconfiguration.ConfigurationTabs'
        , 'sourcesconfiguration.PhidgetPorts'

    ],

    refs: [
        {ref: 'sourcesconfigurationcapturemain',                                selector: 'sourcesconfigurationcapturemain'                             }
        , {ref: 'sourcesconfigurationcapturesourcemain',                        selector: 'sourcesconfigurationcapturesourcemain'                       }
        , {ref: 'sourcesconfigurationcapturesourcecfgsourceactive',             selector: 'sourcesconfigurationcapturesourcecfgsourceactive'            }
        , {ref: 'sourcesconfigurationcapturesourcecfgsourcetype',               selector: 'sourcesconfigurationcapturesourcecfgsourcetype'              }
        , {ref: 'sourcesconfigurationcapturesourcecfgprocessraw',               selector: 'sourcesconfigurationcapturesourcecfgprocessraw'              }
        , {ref: 'sourcesconfigurationcapturesourcecfgcroncapturevalue',         selector: 'sourcesconfigurationcapturesourcecfgcroncapturevalue'        }
        , {ref: 'sourcesconfigurationcapturesourcecfgcroncaptureinterval',      selector: 'sourcesconfigurationcapturesourcecfgcroncaptureinterval'     }
        , {ref: 'sourcesconfigurationcapturesourcecfgminimumcaptureinterval',   selector: 'sourcesconfigurationcapturesourcecfgminimumcaptureinterval'  }
        , {ref: 'sourcesconfigurationcapturesourcecfgminimumcapturevalue',      selector: 'sourcesconfigurationcapturesourcecfgminimumcapturevalue'     }
        , {ref: 'sourcesconfigurationcapturesourcecfgcapturedelay',             selector: 'sourcesconfigurationcapturesourcecfgcapturedelay'            }
        , {ref: 'sourcesconfigurationcapturesourcecfgcapturedelayinterval',     selector: 'sourcesconfigurationcapturesourcecfgcapturedelayinterval'    }
        , {ref: 'sourcesconfigurationcapturesourcecfgcapturedelaydate',         selector: 'sourcesconfigurationcapturesourcecfgcapturedelaydate'        }
        , {ref: 'sourcesconfigurationcapturesourcecfgcapturetimezone',          selector: 'sourcesconfigurationcapturesourcecfgcapturetimezone'         }
        , {ref: 'sourcesconfigurationcapturesourcecfgsourcelanguage',           selector: 'sourcesconfigurationcapturesourcecfgsourcelanguage'          }
        , {ref: 'sourcesconfigurationcapturesourcecfgemailerroractivate',       selector: 'sourcesconfigurationcapturesourcecfgemailerroractivate'      }
        , {ref: 'sourcesconfigurationcapturesourcecfgsourcedebug',              selector: 'sourcesconfigurationcapturesourcecfgsourcedebug'             }
        , {ref: 'sourcesconfigurationcapturesourcecfgnocapture',                selector: 'sourcesconfigurationcapturesourcecfgnocapture'               }
        //, {ref: 'sourcesconfigurationcapturesourcecfgenablexfer',               selector: 'sourcesconfigurationcapturesourcecfgenablexfer'              }

        , {ref: 'sourcesconfigurationcapturecalendarmain',                      selector: 'sourcesconfigurationcapturecalendarmain'                     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcroncalendar',           selector: 'sourcesconfigurationcapturecalendarcfgcroncalendar'            }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestartminute1',    selector: 'sourcesconfigurationcapturecalendarcfgcapturestartminute1'   }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturedayenable1',      selector: 'sourcesconfigurationcapturecalendarcfgcapturedayenable1'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendhour1',        selector: 'sourcesconfigurationcapturecalendarcfgcaptureendhour1'       }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendminute1',      selector: 'sourcesconfigurationcapturecalendarcfgcaptureendminute1'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestarthour1',      selector: 'sourcesconfigurationcapturecalendarcfgcapturestarthour1'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestartminute2',    selector: 'sourcesconfigurationcapturecalendarcfgcapturestartminute2'   }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturedayenable2',      selector: 'sourcesconfigurationcapturecalendarcfgcapturedayenable2'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendhour2',        selector: 'sourcesconfigurationcapturecalendarcfgcaptureendhour2'       }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendminute2',      selector: 'sourcesconfigurationcapturecalendarcfgcaptureendminute2'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestarthour2',      selector: 'sourcesconfigurationcapturecalendarcfgcapturestarthour2'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestartminute3',    selector: 'sourcesconfigurationcapturecalendarcfgcapturestartminute3'   }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturedayenable3',      selector: 'sourcesconfigurationcapturecalendarcfgcapturedayenable3'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendhour3',        selector: 'sourcesconfigurationcapturecalendarcfgcaptureendhour3'       }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendminute3',      selector: 'sourcesconfigurationcapturecalendarcfgcaptureendminute3'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestarthour3',      selector: 'sourcesconfigurationcapturecalendarcfgcapturestarthour3'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestartminute4',    selector: 'sourcesconfigurationcapturecalendarcfgcapturestartminute4'   }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturedayenable4',      selector: 'sourcesconfigurationcapturecalendarcfgcapturedayenable4'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendhour4',        selector: 'sourcesconfigurationcapturecalendarcfgcaptureendhour4'       }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendminute4',      selector: 'sourcesconfigurationcapturecalendarcfgcaptureendminute4'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestarthour4',      selector: 'sourcesconfigurationcapturecalendarcfgcapturestarthour4'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestartminute5',    selector: 'sourcesconfigurationcapturecalendarcfgcapturestartminute5'   }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturedayenable5',      selector: 'sourcesconfigurationcapturecalendarcfgcapturedayenable5'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendhour5',        selector: 'sourcesconfigurationcapturecalendarcfgcaptureendhour5'       }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendminute5',      selector: 'sourcesconfigurationcapturecalendarcfgcaptureendminute5'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestarthour5',      selector: 'sourcesconfigurationcapturecalendarcfgcapturestarthour5'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestartminute6',    selector: 'sourcesconfigurationcapturecalendarcfgcapturestartminute6'   }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturedayenable6',      selector: 'sourcesconfigurationcapturecalendarcfgcapturedayenable6'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendhour6',        selector: 'sourcesconfigurationcapturecalendarcfgcaptureendhour6'       }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendminute6',      selector: 'sourcesconfigurationcapturecalendarcfgcaptureendminute6'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestarthour6',      selector: 'sourcesconfigurationcapturecalendarcfgcapturestarthour6'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestartminute7',    selector: 'sourcesconfigurationcapturecalendarcfgcapturestartminute7'   }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturedayenable7',      selector: 'sourcesconfigurationcapturecalendarcfgcapturedayenable7'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendhour7',        selector: 'sourcesconfigurationcapturecalendarcfgcaptureendhour7'       }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcaptureendminute7',      selector: 'sourcesconfigurationcapturecalendarcfgcaptureendminute7'     }
        , {ref: 'sourcesconfigurationcapturecalendarcfgcapturestarthour7',      selector: 'sourcesconfigurationcapturecalendarcfgcapturestarthour7'     }

        , {ref: 'sourcesconfigurationcapturegphotomain',                            selector: 'sourcesconfigurationcapturegphotomain'                           }
        , {ref: 'sourcesconfigurationcapturegphotocfgsourcegphotocameramodel',      selector: 'sourcesconfigurationcapturegphotocfgsourcegphotocameramodel'     }
        , {ref: 'sourcesconfigurationcapturegphotocfgsourcegphotocameraportdetail', selector: 'sourcesconfigurationcapturegphotocfgsourcegphotocameraportdetail'}
        , {ref: 'sourcesconfigurationcapturegphotocfgsourcegphotoowner',            selector: 'sourcesconfigurationcapturegphotocfgsourcegphotoowner'           }

        , {ref: 'sourcesconfigurationcapturewebcampakmain',                     selector: 'sourcesconfigurationcapturewebcampakmain'                    }
        , {ref: 'sourcesconfigurationcapturewebcampakcfgsourcewpaktype',        selector: 'sourcesconfigurationcapturewebcampakcfgsourcewpaktype'       }
        , {ref: 'sourcesconfigurationcapturewebcampakcfgsourcewpakgetsourceid', selector: 'sourcesconfigurationcapturewebcampakcfgsourcewpakgetsourceid'}

        , {ref: 'sourcesconfigurationcaptureipcameramain',                          selector: 'sourcesconfigurationcaptureipcameramain'                         }
        , {ref: 'sourcesconfigurationcaptureipcameracfgsourcecamiptemplate',        selector: 'sourcesconfigurationcaptureipcameracfgsourcecamiptemplate'       }
        , {ref: 'sourcesconfigurationcaptureipcameracfgsourcecamiplimiterotation',  selector: 'sourcesconfigurationcaptureipcameracfgsourcecamiplimiterotation' }
        , {ref: 'sourcesconfigurationcaptureipcameracfgsourcecamiphotlinkerror',    selector: 'sourcesconfigurationcaptureipcameracfgsourcecamiphotlinkerror'   }

        , {ref: 'sourcesconfigurationcapturelinkmain',                  selector: 'sourcesconfigurationcapturelinkmain'                 }
        , {ref: 'sourcesconfigurationcapturelinkcfgsourcewebfileurl',   selector: 'sourcesconfigurationcapturelinkcfgsourcewebfileurl'  }

        , {ref: 'sourcesconfigurationcapturephidgetmain',               selector: 'sourcesconfigurationcapturephidgetmain'              }
        , {ref: 'sourcesconfigurationcapturephidgetphidgetsportslist',  selector: 'sourcesconfigurationcapturephidgetphidgetsportslist' }
        , {ref: 'sourcesconfigurationcapturephidgetsensorslist',        selector: 'sourcesconfigurationcapturephidgetsensorslist'       }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration: Controller init: function()');
        this.control({
            '*': {
                'WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue': this.updateStoreValue
                , 'WPAKD.controller.sourcesconfiguration.capture.Capture.updateCalendarSchedule': this.updateCalendarSchedule
            }
            , 'sourcesconfigurationcapturesourcecfgsourcetype': {select:  this.collapseOnSourceType   }
            , 'sourcesconfigurationcapturephidgetsensorslist':  {edit:    this.phidgetSensorsModified }
        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.sourcesconfiguration.capture.Capture.loadSettings':       this.loadSettings
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration->Capture: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getSourcesconfigurationCaptureStore().findRecord('NAME', configName, 0, false, false, true);
        if (configRecord !== undefined && configRecord !== null) {
            if (configRecord.get('VALUE') != newValue) {
                this.consoleLog('updateStoreValue(): update config: ' + configName + ' from: ' + configRecord.get('VALUE') + ' to: ' + newValue, 'info');
                configRecord.set('VALUE', newValue);
                this.fireEvent('WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores');
            }
        } else {
            this.consoleLog('updateStoreValue(): Unable to find: ' + configName, 'warn');
        }
    }

    , updateCalendarSchedule: function(modifiedDay) {
        this.consoleLog('updateCalendarSchedule()');
        if (modifiedDay === 1) {
            var cfgcapturedayenable = this.getSourcesconfigurationcapturecalendarcfgcapturedayenable1().getValue();
            var cfgcapturestarthour = this.getSourcesconfigurationcapturecalendarcfgcapturestarthour1().getValue();
            var cfgcapturestartminute = this.getSourcesconfigurationcapturecalendarcfgcapturestartminute1().getValue();
            var cfgcaptureendhour = this.getSourcesconfigurationcapturecalendarcfgcaptureendhour1().getValue();
            var cfgcaptureendminute = this.getSourcesconfigurationcapturecalendarcfgcaptureendminute1().getValue();
        } else if (modifiedDay === 2) {
            var cfgcapturedayenable = this.getSourcesconfigurationcapturecalendarcfgcapturedayenable2().getValue();
            var cfgcapturestarthour = this.getSourcesconfigurationcapturecalendarcfgcapturestarthour2().getValue();
            var cfgcapturestartminute = this.getSourcesconfigurationcapturecalendarcfgcapturestartminute2().getValue();
            var cfgcaptureendhour = this.getSourcesconfigurationcapturecalendarcfgcaptureendhour2().getValue();
            var cfgcaptureendminute = this.getSourcesconfigurationcapturecalendarcfgcaptureendminute2().getValue();
        } else if (modifiedDay === 3) {
            var cfgcapturedayenable = this.getSourcesconfigurationcapturecalendarcfgcapturedayenable3().getValue();
            var cfgcapturestarthour = this.getSourcesconfigurationcapturecalendarcfgcapturestarthour3().getValue();
            var cfgcapturestartminute = this.getSourcesconfigurationcapturecalendarcfgcapturestartminute3().getValue();
            var cfgcaptureendhour = this.getSourcesconfigurationcapturecalendarcfgcaptureendhour3().getValue();
            var cfgcaptureendminute = this.getSourcesconfigurationcapturecalendarcfgcaptureendminute3().getValue();
        } else if (modifiedDay === 4) {
            var cfgcapturedayenable = this.getSourcesconfigurationcapturecalendarcfgcapturedayenable4().getValue();
            var cfgcapturestarthour = this.getSourcesconfigurationcapturecalendarcfgcapturestarthour4().getValue();
            var cfgcapturestartminute = this.getSourcesconfigurationcapturecalendarcfgcapturestartminute4().getValue();
            var cfgcaptureendhour = this.getSourcesconfigurationcapturecalendarcfgcaptureendhour4().getValue();
            var cfgcaptureendminute = this.getSourcesconfigurationcapturecalendarcfgcaptureendminute4().getValue();
        } else if (modifiedDay === 5) {
            var cfgcapturedayenable = this.getSourcesconfigurationcapturecalendarcfgcapturedayenable5().getValue();
            var cfgcapturestarthour = this.getSourcesconfigurationcapturecalendarcfgcapturestarthour5().getValue();
            var cfgcapturestartminute = this.getSourcesconfigurationcapturecalendarcfgcapturestartminute5().getValue();
            var cfgcaptureendhour = this.getSourcesconfigurationcapturecalendarcfgcaptureendhour5().getValue();
            var cfgcaptureendminute = this.getSourcesconfigurationcapturecalendarcfgcaptureendminute5().getValue();
        } else if (modifiedDay === 6) {
            var cfgcapturedayenable = this.getSourcesconfigurationcapturecalendarcfgcapturedayenable6().getValue();
            var cfgcapturestarthour = this.getSourcesconfigurationcapturecalendarcfgcapturestarthour6().getValue();
            var cfgcapturestartminute = this.getSourcesconfigurationcapturecalendarcfgcapturestartminute6().getValue();
            var cfgcaptureendhour = this.getSourcesconfigurationcapturecalendarcfgcaptureendhour6().getValue();
            var cfgcaptureendminute = this.getSourcesconfigurationcapturecalendarcfgcaptureendminute6().getValue();
        } else if (modifiedDay === 7) {
            var cfgcapturedayenable = this.getSourcesconfigurationcapturecalendarcfgcapturedayenable7().getValue();
            var cfgcapturestarthour = this.getSourcesconfigurationcapturecalendarcfgcapturestarthour7().getValue();
            var cfgcapturestartminute = this.getSourcesconfigurationcapturecalendarcfgcapturestartminute7().getValue();
            var cfgcaptureendhour = this.getSourcesconfigurationcapturecalendarcfgcaptureendhour7().getValue();
            var cfgcaptureendminute = this.getSourcesconfigurationcapturecalendarcfgcaptureendminute7().getValue();
        }
        var configRecord = this.getSourcesconfigurationCaptureStore().findRecord('NAME', 'cfgcronday' + modifiedDay, 0, false, false, true);
        if (configRecord !== undefined && cfgcapturestarthour !== null && cfgcapturestartminute !== null && cfgcaptureendhour !== null && cfgcaptureendminute !== null) {
            if (cfgcapturedayenable === true) {cfgcapturedayenable = 'yes'} else {cfgcapturedayenable = 'no'}
            if (cfgcapturestarthour < 10) {cfgcapturestarthour = '0' + cfgcapturestarthour}
            if (cfgcapturestartminute < 10) {cfgcapturestartminute = '0' + cfgcapturestartminute}
            if (cfgcaptureendhour < 10) {cfgcaptureendhour = '0' + cfgcaptureendhour}
            if (cfgcaptureendminute < 10) {cfgcaptureendminute = '0' + cfgcaptureendminute}
            //yes, 00, 00, 00, 00
            var cfgcronday = cfgcapturedayenable + ',' + cfgcapturestarthour + ','  + cfgcapturestartminute + ',' + cfgcaptureendhour + ',' + cfgcaptureendminute
            if (configRecord.get('VALUE') != cfgcronday) {
                this.consoleLog('updateCalendarSchedule(): update config: cfgcronday' + modifiedDay + ' from: ' + configRecord.get('VALUE') + ' to: ' + cfgcronday, 'info');
                configRecord.set('VALUE', cfgcronday);
                this.fireEvent('WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores');
            }
        }
    }

    , loadSettings: function() {
        this.consoleLog('loadSettings()');
        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord('NAME', 'config-source', 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationcapturemain().setVisible(false);
        } else {
            var scope = this;
            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getSourcesconfigurationCaptureStore().each(function (rec) {
                var configValue = rec.get('VALUE');
                var configName = rec.get('NAME');
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty('cfgsourceactive')){this.getSourcesconfigurationcapturesourcecfgsourceactive().setValue(configObj['cfgsourceactive']);
            } else {this.getSourcesconfigurationcapturesourcecfgsourceactive().setVisible(false);}

            if(configObj.hasOwnProperty('cfgsourcetype')){this.getSourcesconfigurationcapturesourcecfgsourcetype().setValue(configObj['cfgsourcetype']);
            } else {this.getSourcesconfigurationcapturesourcecfgsourcetype().setVisible(false);}
            
            if(configObj.hasOwnProperty('cfgprocessraw')){this.getSourcesconfigurationcapturesourcecfgprocessraw().setValue(configObj['cfgprocessraw']);
            } else {this.getSourcesconfigurationcapturesourcecfgprocessraw().setVisible(false);}            

            if(configObj.hasOwnProperty('cfgcroncapturevalue')){this.getSourcesconfigurationcapturesourcecfgcroncapturevalue().setValue(configObj['cfgcroncapturevalue']);
            } else {this.getSourcesconfigurationcapturesourcecfgcroncapturevalue().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcroncaptureinterval')){this.getSourcesconfigurationcapturesourcecfgcroncaptureinterval().setValue(configObj['cfgcroncaptureinterval']);
            } else {this.getSourcesconfigurationcapturesourcecfgcroncaptureinterval().setVisible(false);}

            if(configObj.hasOwnProperty('cfgminimumcaptureinterval')){this.getSourcesconfigurationcapturesourcecfgminimumcaptureinterval().setValue(configObj['cfgminimumcaptureinterval']);
            } else {this.getSourcesconfigurationcapturesourcecfgminimumcaptureinterval().setVisible(false);}

            if(configObj.hasOwnProperty('cfgminimumcapturevalue')){this.getSourcesconfigurationcapturesourcecfgminimumcapturevalue().setValue(configObj['cfgminimumcapturevalue']);
            } else {this.getSourcesconfigurationcapturesourcecfgminimumcapturevalue().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcapturedelay')){this.getSourcesconfigurationcapturesourcecfgcapturedelay().setValue(configObj['cfgcapturedelay']);
            } else {this.getSourcesconfigurationcapturesourcecfgcapturedelay().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcapturedelayinterval')){this.getSourcesconfigurationcapturesourcecfgcapturedelayinterval().setValue(configObj['cfgcapturedelayinterval']);
            } else {this.getSourcesconfigurationcapturesourcecfgcapturedelayinterval().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcapturedelaydate')){this.getSourcesconfigurationcapturesourcecfgcapturedelaydate().setValue(configObj['cfgcapturedelaydate']);
            } else {this.getSourcesconfigurationcapturesourcecfgcapturedelaydate().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcapturetimezone')){this.getSourcesconfigurationcapturesourcecfgcapturetimezone().setValue(configObj['cfgcapturetimezone']);
            } else {this.getSourcesconfigurationcapturesourcecfgcapturetimezone().setVisible(false);}

            if(configObj.hasOwnProperty('cfgsourcelanguage')){this.getSourcesconfigurationcapturesourcecfgsourcelanguage().setValue(configObj['cfgsourcelanguage']);
            } else {this.getSourcesconfigurationcapturesourcecfgsourcelanguage().setVisible(false);}

            if(configObj.hasOwnProperty('cfgemailerroractivate')){this.getSourcesconfigurationcapturesourcecfgemailerroractivate().setValue(configObj['cfgemailerroractivate']);
            } else {this.getSourcesconfigurationcapturesourcecfgemailerroractivate().setVisible(false);}

            if(configObj.hasOwnProperty('cfgsourcedebug')){this.getSourcesconfigurationcapturesourcecfgsourcedebug().setValue(configObj['cfgsourcedebug']);
            } else {this.getSourcesconfigurationcapturesourcecfgsourcedebug().setVisible(false);}

            if(configObj.hasOwnProperty('cfgnocapture')){this.getSourcesconfigurationcapturesourcecfgnocapture().setValue(configObj['cfgnocapture']);
            } else {this.getSourcesconfigurationcapturesourcecfgnocapture().setVisible(false);}

            //if(configObj.hasOwnProperty('cfgenablexfer')){this.getSourcesconfigurationcapturesourcecfgenablexfer().setValue(configObj['cfgenablexfer']);
            //} else {this.getSourcesconfigurationcapturesourcecfgenablexfer().setVisible(false);}


            if(configObj.hasOwnProperty('cfgcroncalendar')){this.getSourcesconfigurationcapturecalendarcfgcroncalendar().setValue(configObj['cfgcroncalendar']);
            } else {this.getSourcesconfigurationcapturecalendarcfgcroncalendar().setVisible(false);}

            //yes, 00, 00, 00, 00
            if(configObj.hasOwnProperty('cfgcronday1')){
                var cfgcronday1 = configObj['cfgcronday1'];
                var cfgcronday1split = cfgcronday1.replace(/\s+/g, '').split(',');
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable1().setValue(cfgcronday1split[0]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour1().setValue(cfgcronday1split[1]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute1().setValue(cfgcronday1split[2]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour1().setValue(cfgcronday1split[3]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute1().setValue(cfgcronday1split[4]);
            } else {
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable1().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour1().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute1().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour1().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute1().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcronday2')){
                var cfgcronday2 = configObj['cfgcronday2'];
                var cfgcronday2split = cfgcronday2.replace(/\s+/g, '').split(',');
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable2().setValue(cfgcronday2split[0]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour2().setValue(cfgcronday2split[1]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute2().setValue(cfgcronday2split[2]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour2().setValue(cfgcronday2split[3]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute2().setValue(cfgcronday2split[4]);
            } else {
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable2().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour2().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute2().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour2().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute2().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcronday3')){
                var cfgcronday3 = configObj['cfgcronday3'];
                var cfgcronday3split = cfgcronday3.replace(/\s+/g, '').split(',');
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable3().setValue(cfgcronday3split[0]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour3().setValue(cfgcronday3split[1]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute3().setValue(cfgcronday3split[2]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour3().setValue(cfgcronday3split[3]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute3().setValue(cfgcronday3split[4]);
            } else {
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable3().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour3().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute3().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour3().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute3().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcronday4')){
                var cfgcronday4 = configObj['cfgcronday4'];
                var cfgcronday4split = cfgcronday4.replace(/\s+/g, '').split(',');
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable4().setValue(cfgcronday4split[0]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour4().setValue(cfgcronday4split[1]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute4().setValue(cfgcronday4split[2]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour4().setValue(cfgcronday4split[3]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute4().setValue(cfgcronday4split[4]);
            } else {
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable4().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour4().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute4().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour4().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute4().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcronday5')){
                var cfgcronday5 = configObj['cfgcronday5'];
                var cfgcronday5split = cfgcronday5.replace(/\s+/g, '').split(',');
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable5().setValue(cfgcronday5split[0]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour5().setValue(cfgcronday5split[1]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute5().setValue(cfgcronday5split[2]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour5().setValue(cfgcronday5split[3]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute5().setValue(cfgcronday5split[4]);
            } else {
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable5().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour5().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute5().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour5().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute5().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcronday6')){
                var cfgcronday6 = configObj['cfgcronday6'];
                var cfgcronday6split = cfgcronday6.replace(/\s+/g, '').split(',');
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable6().setValue(cfgcronday6split[0]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour6().setValue(cfgcronday6split[1]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute6().setValue(cfgcronday6split[2]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour6().setValue(cfgcronday6split[3]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute6().setValue(cfgcronday6split[4]);
            } else {
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable6().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour6().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute6().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour6().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute6().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcronday7')){
                var cfgcronday7 = configObj['cfgcronday7'];
                var cfgcronday7split = cfgcronday7.replace(/\s+/g, '').split(',');
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable7().setValue(cfgcronday7split[0]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour7().setValue(cfgcronday7split[1]);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute7().setValue(cfgcronday7split[2]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour7().setValue(cfgcronday7split[3]);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute7().setValue(cfgcronday7split[4]);
            } else {
                this.getSourcesconfigurationcapturecalendarcfgcapturedayenable7().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestarthour7().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcapturestartminute7().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendhour7().setVisible(false);
                this.getSourcesconfigurationcapturecalendarcfgcaptureendminute7().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgsourcegphotocameramodel')){this.getSourcesconfigurationcapturegphotocfgsourcegphotocameramodel().setValue(configObj['cfgsourcegphotocameramodel']);
            } else {this.getSourcesconfigurationcapturegphotocfgsourcegphotocameramodel().setVisible(false);}
            if(configObj.hasOwnProperty('cfgsourcegphotocameraportdetail')){this.getSourcesconfigurationcapturegphotocfgsourcegphotocameraportdetail().setValue(configObj['cfgsourcegphotocameraportdetail']);
            } else {this.getSourcesconfigurationcapturegphotocfgsourcegphotocameraportdetail().setVisible(false);}
            if(configObj.hasOwnProperty('cfgsourcegphotoowner')){this.getSourcesconfigurationcapturegphotocfgsourcegphotoowner().setValue(configObj['cfgsourcegphotoowner']);
            } else {this.getSourcesconfigurationcapturegphotocfgsourcegphotoowner().setVisible(false);}

            if(configObj.hasOwnProperty('cfgsourcewpaktype')){this.getSourcesconfigurationcapturewebcampakcfgsourcewpaktype().setValue(configObj['cfgsourcewpaktype']);
            } else {this.getSourcesconfigurationcapturewebcampakcfgsourcewpaktype().setVisible(false);}
            if(configObj.hasOwnProperty('cfgsourcewpakgetsourceid')){this.getSourcesconfigurationcapturewebcampakcfgsourcewpakgetsourceid().setValue(configObj['cfgsourcewpakgetsourceid']);
            } else {this.getSourcesconfigurationcapturewebcampakcfgsourcewpakgetsourceid().setVisible(false);}

            if(configObj.hasOwnProperty('cfgsourcecamiptemplate')){this.getSourcesconfigurationcaptureipcameracfgsourcecamiptemplate().setValue(configObj['cfgsourcecamiptemplate']);
            } else {this.getSourcesconfigurationcaptureipcameracfgsourcecamiptemplate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgsourcecamiplimiterotation')){this.getSourcesconfigurationcaptureipcameracfgsourcecamiplimiterotation().setValue(configObj['cfgsourcecamiplimiterotation']);
            } else {this.getSourcesconfigurationcaptureipcameracfgsourcecamiplimiterotation().setVisible(false);}
            if(configObj.hasOwnProperty('cfgsourcecamiphotlinkerror')){this.getSourcesconfigurationcaptureipcameracfgsourcecamiphotlinkerror().setValue(configObj['cfgsourcecamiphotlinkerror']);
            } else {this.getSourcesconfigurationcaptureipcameracfgsourcecamiphotlinkerror().setVisible(false);}

            if(configObj.hasOwnProperty('cfgsourcewebfileurl')){this.getSourcesconfigurationcapturelinkcfgsourcewebfileurl().setValue(configObj['cfgsourcewebfileurl']);
            } else {this.getSourcesconfigurationcapturelinkcfgsourcewebfileurl().setVisible(false);}

            // Load phidget configuration into a specific memory store
            if (configObj.hasOwnProperty('cfgphidgetsensornb')) {
                var sensorNb = configObj['cfgphidgetsensornb'];
                for (i = 1; i < sensorNb + 1; i++) {
                    if (configObj.hasOwnProperty('cfgphidgetsensor' + i)) {
                        var currentConfig = configObj['cfgphidgetsensor' + i];
                        var currentConfigArray = currentConfig.split(',');
                        this.getSourcesconfigurationPhidgetPortsStore().add(
                            [{
                                ID:  i
                                , NAME:  currentConfigArray[0]
                                , PORT:  currentConfigArray[1]
                                , LEGEND:currentConfigArray[2]
                                , COLOR: currentConfigArray[3]
                            }]
                        );
                    }
                }
            }

            this.collapseOnSourceType();
            if(configObj['cfgcroncalendar'] == 'yes') {
                this.getSourcesconfigurationcapturecalendarmain().expand();
            } else {
                this.getSourcesconfigurationcapturecalendarmain().collapse();
            }

            var configObj = {};
            this.getSourcesconfigurationSectionCaptureStore().each(function (rec) {
                var configName = rec.get('NAME');
                configObj[configName] = true;
            });

            if(!configObj.hasOwnProperty('source')){this.getSourcesconfigurationcapturesourcemain().setVisible(false);}
            if(!configObj.hasOwnProperty('cron')){this.getSourcesconfigurationcapturecalendarmain().setVisible(false);}
            if(!configObj.hasOwnProperty('gphoto')){this.getSourcesconfigurationcapturegphotomain().setVisible(false);}
            if(!configObj.hasOwnProperty('ipcam')){this.getSourcesconfigurationcaptureipcameramain().setVisible(false);}
            if(!configObj.hasOwnProperty('wpak-source')){this.getSourcesconfigurationcapturewebcampakmain().setVisible(false);}
            if(!configObj.hasOwnProperty('phidget')){this.getSourcesconfigurationcapturephidgetmain().setVisible(false);}
            if(!configObj.hasOwnProperty('webfile')){this.getSourcesconfigurationcapturelinkmain().setVisible(false);}

            this.getSourcesconfigurationcapturemain().setDisabled(false);
            this.getSourcesconfigurationcapturemain().setLoading(false);
        }
    }

    , phidgetSensorsModified: function() {
        this.consoleLog('phidgetSensorsModified()');
        var scope = this;
        //Build Phidget sensor string based on values in table
        this.getSourcesconfigurationPhidgetPortsStore().each(function (rec) {
            var configName = 'cfgphidgetsensor' + rec.get('ID');
            var newValue = rec.get('NAME') + ',' + rec.get('PORT') + ',' + rec.get('LEGEND') + ',' + rec.get('COLOR');
            var configRecord = scope.getSourcesconfigurationCaptureStore().findRecord('NAME', configName, 0, false, false, true);
            if (configRecord !== undefined && configRecord !== null) {
                if (configRecord.get('VALUE') != newValue) {
                    scope.consoleLog('phidgetSensorsModified(): update config: ' + configName + ' from: ' + configRecord.get('VALUE') + ' to: ' + newValue, 'info');
                    configRecord.set('VALUE', newValue);
                    scope.fireEvent('WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores');
                }
            } else {
                scope.consoleLog('phidgetSensorsModified(): Unable to find: ' + configName, 'warn');
            }
        });
    }

    , collapseOnSourceType: function() {
        this.consoleLog('collapseOnSourceType()');
        if (this.getSourcesconfigurationcapturesourcecfgsourcetype().getValue() == 'gphoto'){
            this.getSourcesconfigurationcapturegphotomain().expand();
            this.getSourcesconfigurationcapturephidgetmain().collapse();
            this.getSourcesconfigurationcapturelinkmain().collapse();
            this.getSourcesconfigurationcaptureipcameramain().collapse();
            this.getSourcesconfigurationcapturewebcampakmain().collapse();
        } else if (this.getSourcesconfigurationcapturesourcecfgsourcetype().getValue() == 'wpak') {
            this.getSourcesconfigurationcapturegphotomain().collapse();
            this.getSourcesconfigurationcapturephidgetmain().collapse();
            this.getSourcesconfigurationcapturelinkmain().collapse();
            this.getSourcesconfigurationcaptureipcameramain().collapse();
            this.getSourcesconfigurationcapturewebcampakmain().expand();
        } else if (this.getSourcesconfigurationcapturesourcecfgsourcetype().getValue() == 'webcam') {
            this.getSourcesconfigurationcapturegphotomain().collapse();
            this.getSourcesconfigurationcapturephidgetmain().collapse();
            this.getSourcesconfigurationcapturelinkmain().collapse();
            this.getSourcesconfigurationcaptureipcameramain().collapse();
            this.getSourcesconfigurationcapturewebcampakmain().collapse();
        } else if (this.getSourcesconfigurationcapturesourcecfgsourcetype().getValue() == 'ipcam') {
            this.getSourcesconfigurationcapturegphotomain().collapse();
            this.getSourcesconfigurationcapturephidgetmain().collapse();
            this.getSourcesconfigurationcapturelinkmain().collapse();
            this.getSourcesconfigurationcaptureipcameramain().expand();
            this.getSourcesconfigurationcapturewebcampakmain().collapse();
        } else if (this.getSourcesconfigurationcapturesourcecfgsourcetype().getValue() == 'webfile' || this.getSourcesconfigurationcapturesourcecfgsourcetype().getValue() == 'rtsp') {
            this.getSourcesconfigurationcapturegphotomain().collapse();
            this.getSourcesconfigurationcapturephidgetmain().collapse();
            this.getSourcesconfigurationcapturelinkmain().expand();
            this.getSourcesconfigurationcaptureipcameramain().collapse();
            this.getSourcesconfigurationcapturewebcampakmain().collapse();
        } else if (this.getSourcesconfigurationcapturesourcecfgsourcetype().getValue() == 'sensor') {
            this.getSourcesconfigurationcapturegphotomain().collapse();
            this.getSourcesconfigurationcapturephidgetmain().expand();
            this.getSourcesconfigurationcapturelinkmain().collapse();
            this.getSourcesconfigurationcaptureipcameramain().collapse();
            this.getSourcesconfigurationcapturewebcampakmain().collapse();
        }
    }

});
