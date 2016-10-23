/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.config.Config");
//</debug>
/*
 * Controller used to handle webcampak configuration from the dashboard
 */
Ext.define("WPAKT.controller.config.Config", {
    extend: "Ext.app.Controller"

    , stores: [
        "dashboard.Status"
        
        // Contains the list of tabs & sections to be displayed to the user during configuration
        , "config.ConfigurationTabs"
        , "config.SectionCapture"
        , "config.SectionVideo"
        , "config.SectionVideoCustom"
        , "config.SectionVideoPost"

        // Contains the list of configuration settings and their values to be displayed to the user during configuration
        , "config.Capture"
        , "config.Video"
        , "config.VideoCustom"
        , "config.VideoPost"
        , "config.FTPServers"
        , "config.WatermarkFiles"
        , "config.Fonts"
        , "config.PhidgetSensors"
        , "config.PhidgetPorts"
    ]

    , models: [
        "dashboard.Status"
        
        // Contains the list of tabs & sections to be displayed to the user during configuration
        , "config.ConfigurationTabs"
        , "config.SectionCapture"
        , "config.SectionVideo"
        , "config.SectionVideoCustom"
        , "config.SectionVideoPost"

        // Contains the list of configuration settings and their values to be displayed to the user during configuration
        , "config.Capture"
        , "config.Video"
        , "config.VideoCustom"
        , "config.VideoPost"
        , "config.FTPServers"
        , "config.WatermarkFiles"
        , "config.Fonts"
        , "config.PhidgetSensors"
        , "config.PhidgetPorts"
    ]

    , views: [
        "core.skeleton.card.Main"
        , "config.Main"
        
        , "config.capture.save.Main"
        , "config.capture.save.SaveButton"
        , "config.capture.save.CancelButton"
        , "config.capture.save.Status"
                
        , "config.capture.source.Main"
        , "config.capture.source.Cfgsourceactive"
        , "config.capture.source.Cfgcroncapturevalue"
        , "config.capture.source.Cfgcroncaptureinterval"

        , "config.capture.calendar.Main"
        , "config.capture.calendar.Cfgcroncalendar"
        , "config.capture.calendar.Cfgcapturedayenable1"
        , "config.capture.calendar.Cfgcaptureendhour1"
        , "config.capture.calendar.Cfgcaptureendminute1"
        , "config.capture.calendar.Cfgcapturestarthour1"
        , "config.capture.calendar.Cfgcapturestartminute1"
        , "config.capture.calendar.Cfgcapturedayenable2"
        , "config.capture.calendar.Cfgcaptureendhour2"
        , "config.capture.calendar.Cfgcaptureendminute2"
        , "config.capture.calendar.Cfgcapturestarthour2"
        , "config.capture.calendar.Cfgcapturestartminute2"
        , "config.capture.calendar.Cfgcapturedayenable3"
        , "config.capture.calendar.Cfgcaptureendhour3"
        , "config.capture.calendar.Cfgcaptureendminute3"
        , "config.capture.calendar.Cfgcapturestarthour3"
        , "config.capture.calendar.Cfgcapturestartminute3"
        , "config.capture.calendar.Cfgcapturedayenable4"
        , "config.capture.calendar.Cfgcaptureendhour4"
        , "config.capture.calendar.Cfgcaptureendminute4"
        , "config.capture.calendar.Cfgcapturestarthour4"
        , "config.capture.calendar.Cfgcapturestartminute4"
        , "config.capture.calendar.Cfgcapturedayenable5"
        , "config.capture.calendar.Cfgcaptureendhour5"
        , "config.capture.calendar.Cfgcaptureendminute5"
        , "config.capture.calendar.Cfgcapturestarthour5"
        , "config.capture.calendar.Cfgcapturestartminute5"
        , "config.capture.calendar.Cfgcapturedayenable6"
        , "config.capture.calendar.Cfgcaptureendhour6"
        , "config.capture.calendar.Cfgcaptureendminute6"
        , "config.capture.calendar.Cfgcapturestarthour6"
        , "config.capture.calendar.Cfgcapturestartminute6"
        , "config.capture.calendar.Cfgcapturedayenable7"
        , "config.capture.calendar.Cfgcaptureendhour7"
        , "config.capture.calendar.Cfgcaptureendminute7"
        , "config.capture.calendar.Cfgcapturestarthour7"
        , "config.capture.calendar.Cfgcapturestartminute7"
                
    ]

    , refs: [
        {ref: "configmain",                                       selector: "configmain",                                   autoCreate: true,   xtype: "configmain" }
        , {ref: "coreskeletoncardmain",                           selector: "coreskeletoncardmain"                          }

        , {ref: "configcapturesourcemain",                        selector: "configcapturesourcemain"                       }
        , {ref: "configcapturesourcecfgsourceactive",             selector: "configcapturesourcecfgsourceactive"            }
        , {ref: "configcapturesourcecfgcroncapturevalue",         selector: "configcapturesourcecfgcroncapturevalue"        }
        , {ref: "configcapturesourcecfgcroncaptureinterval",      selector: "configcapturesourcecfgcroncaptureinterval"     }

        , {ref: "configcapturesavemain",                            selector: "configcapturesavemain"                       }
        , {ref: "configcapturesavesavebutton",                      selector: "configcapturesavesavebutton"                 }
        , {ref: "configcapturesavecancelbutton",                    selector: "configcapturesavecancelbutton"               }
        , {ref: "configcapturesavestatus",                          selector: "configcapturesavestatus"                     }

        , {ref: "configcapturecalendarmain",                      selector: "configcapturecalendarmain"                     }
        , {ref: "configcapturecalendarcfgcroncalendar",           selector: "configcapturecalendarcfgcroncalendar"          }
        , {ref: "configcapturecalendarcfgcapturestartminute1",    selector: "configcapturecalendarcfgcapturestartminute1"   }
        , {ref: "configcapturecalendarcfgcapturedayenable1",      selector: "configcapturecalendarcfgcapturedayenable1"     }
        , {ref: "configcapturecalendarcfgcaptureendhour1",        selector: "configcapturecalendarcfgcaptureendhour1"       }
        , {ref: "configcapturecalendarcfgcaptureendminute1",      selector: "configcapturecalendarcfgcaptureendminute1"     }
        , {ref: "configcapturecalendarcfgcapturestarthour1",      selector: "configcapturecalendarcfgcapturestarthour1"     }
        , {ref: "configcapturecalendarcfgcapturestartminute2",    selector: "configcapturecalendarcfgcapturestartminute2"   }
        , {ref: "configcapturecalendarcfgcapturedayenable2",      selector: "configcapturecalendarcfgcapturedayenable2"     }
        , {ref: "configcapturecalendarcfgcaptureendhour2",        selector: "configcapturecalendarcfgcaptureendhour2"       }
        , {ref: "configcapturecalendarcfgcaptureendminute2",      selector: "configcapturecalendarcfgcaptureendminute2"     }
        , {ref: "configcapturecalendarcfgcapturestarthour2",      selector: "configcapturecalendarcfgcapturestarthour2"     }
        , {ref: "configcapturecalendarcfgcapturestartminute3",    selector: "configcapturecalendarcfgcapturestartminute3"   }
        , {ref: "configcapturecalendarcfgcapturedayenable3",      selector: "configcapturecalendarcfgcapturedayenable3"     }
        , {ref: "configcapturecalendarcfgcaptureendhour3",        selector: "configcapturecalendarcfgcaptureendhour3"       }
        , {ref: "configcapturecalendarcfgcaptureendminute3",      selector: "configcapturecalendarcfgcaptureendminute3"     }
        , {ref: "configcapturecalendarcfgcapturestarthour3",      selector: "configcapturecalendarcfgcapturestarthour3"     }
        , {ref: "configcapturecalendarcfgcapturestartminute4",    selector: "configcapturecalendarcfgcapturestartminute4"   }
        , {ref: "configcapturecalendarcfgcapturedayenable4",      selector: "configcapturecalendarcfgcapturedayenable4"     }
        , {ref: "configcapturecalendarcfgcaptureendhour4",        selector: "configcapturecalendarcfgcaptureendhour4"       }
        , {ref: "configcapturecalendarcfgcaptureendminute4",      selector: "configcapturecalendarcfgcaptureendminute4"     }
        , {ref: "configcapturecalendarcfgcapturestarthour4",      selector: "configcapturecalendarcfgcapturestarthour4"     }
        , {ref: "configcapturecalendarcfgcapturestartminute5",    selector: "configcapturecalendarcfgcapturestartminute5"   }
        , {ref: "configcapturecalendarcfgcapturedayenable5",      selector: "configcapturecalendarcfgcapturedayenable5"     }
        , {ref: "configcapturecalendarcfgcaptureendhour5",        selector: "configcapturecalendarcfgcaptureendhour5"       }
        , {ref: "configcapturecalendarcfgcaptureendminute5",      selector: "configcapturecalendarcfgcaptureendminute5"     }
        , {ref: "configcapturecalendarcfgcapturestarthour5",      selector: "configcapturecalendarcfgcapturestarthour5"     }
        , {ref: "configcapturecalendarcfgcapturestartminute6",    selector: "configcapturecalendarcfgcapturestartminute6"   }
        , {ref: "configcapturecalendarcfgcapturedayenable6",      selector: "configcapturecalendarcfgcapturedayenable6"     }
        , {ref: "configcapturecalendarcfgcaptureendhour6",        selector: "configcapturecalendarcfgcaptureendhour6"       }
        , {ref: "configcapturecalendarcfgcaptureendminute6",      selector: "configcapturecalendarcfgcaptureendminute6"     }
        , {ref: "configcapturecalendarcfgcapturestarthour6",      selector: "configcapturecalendarcfgcapturestarthour6"     }
        , {ref: "configcapturecalendarcfgcapturestartminute7",    selector: "configcapturecalendarcfgcapturestartminute7"   }
        , {ref: "configcapturecalendarcfgcapturedayenable7",      selector: "configcapturecalendarcfgcapturedayenable7"     }
        , {ref: "configcapturecalendarcfgcaptureendhour7",        selector: "configcapturecalendarcfgcaptureendhour7"       }
        , {ref: "configcapturecalendarcfgcaptureendminute7",      selector: "configcapturecalendarcfgcaptureendminute7"     }
        , {ref: "configcapturecalendarcfgcapturestarthour7",      selector: "configcapturecalendarcfgcapturestarthour7"     }
        
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "configcapturesavecancelbutton":            {click:  this.cancelConfigurationChanges   }
            , "configcapturesavesavebutton":            {click:  this.saveConfigurationChanges     }
            , "*": {
                "WPAKT.controller.config.Config.updateStoreValue":          this.updateStoreValue
                , "WPAKT.controller.config.Config.updateCalendarSchedule":  this.updateCalendarSchedule
            }

            
        });        
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.config.Config.loadSource":                this.loadSource
                    , "WPAKT.controller.config.Config.loadSourceConfiguration": this.loadSourceConfiguration
                    , "WPAKT.controller.config.Config.configurationSaved":      this.configurationSaved
                  }
             }
        });          
    }

    , onLaunch: function() {

    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Config: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }
    
    /*
     * Getters and Setters to store the ID of the source currently selected.
     */
    , getSourceId: function() {
        if (this.sourceId === undefined) {this.setSourceId(null);}
        return this.sourceId;
    }
    , setSourceId: function(sourceId) {this.sourceId = parseInt(sourceId);return this.sourceId;}    
    /*
     * Getters and Setters for configuration sync status (is store in sync with database).
     */
    , setConfigurationSyncStatus: function(status) {this.configurationSynced = status;}
    , getConfigurationSyncStatus: function() {
        if (this.configurationSynced === undefined) {this.setConfigurationSyncStatus(true);}
        return this.configurationSynced;
    }

    /*
     * Prepare the screen once a source has been selected, load the necessary stores and display a loading spinner
     * 
     * @param {type} sourceid
     * @returns {undefined}
     */
    , loadSource: function(sourceid) {
        this.consoleLog("loadSource() - ID: " + sourceid);
        this.setSourceId(sourceid);
        
        var scope = this;
        this.getCoreskeletoncardmain().removeAll();
        this.getCoreskeletoncardmain().add(scope.getConfigmain());  
        this.getConfigmain().show();     
                             
        this.getConfigmain().setLoading(i18n.gettext("Loading Configuration"));
        this.disableAllConfigScreens();
                
        var requiredStores = [];        
        this.getConfigCaptureStore().getProxy().setExtraParam("SOURCEID", sourceid);
        requiredStores.push({store: this.getConfigCaptureStore(),   action: "REFRESH"});
        
        this.fireEvent("WPAKT.controller.core.loading.Stores.beginLoading"
            , "WEB_CFG_SOURCESCONFIG"
            , "WPAKT.controller.config.Config.loadSourceConfiguration"
            , requiredStores);
    }    
    
    /*
     * After the configuration values have been loaded, update all the input fields with the appropriate value.
     * 
     * @returns {undefined}
     */
    , loadSourceConfiguration: function() {
        this.consoleLog("loadSourceConfiguration()");
        this.consoleLog("loadSourceConfiguration(): Capture records: " + this.getConfigCaptureStore().count());
        if (this.getConfigCaptureStore().count() > 0) {
            this.enableAllConfigScreens();
            this.checkModifiedConfigStores();
                        
            var scope = this;
            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getConfigCaptureStore().each(function (rec) {
                var configValue = rec.get("VALUE");
                var configName = rec.get("NAME");
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty("cfgsourceactive")){this.getConfigcapturesourcecfgsourceactive().setValue(configObj["cfgsourceactive"]);
            } else {this.getConfigcapturesourcecfgsourceactive().setVisible(false);}
            
            if(configObj.hasOwnProperty("cfgcroncapturevalue")){this.getConfigcapturesourcecfgcroncapturevalue().setValue(configObj["cfgcroncapturevalue"]);
            } else {this.getConfigcapturesourcecfgcroncapturevalue().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcroncaptureinterval")){this.getConfigcapturesourcecfgcroncaptureinterval().setValue(configObj["cfgcroncaptureinterval"]);
            } else {this.getConfigcapturesourcecfgcroncaptureinterval().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcroncalendar")){this.getConfigcapturecalendarcfgcroncalendar().setValue(configObj["cfgcroncalendar"]);
            } else {this.getConfigcapturecalendarcfgcroncalendar().setVisible(false);}

            //yes, 00, 00, 00, 00
            if(configObj.hasOwnProperty("cfgcronday1")){
                var cfgcronday1 = configObj["cfgcronday1"];
                var cfgcronday1split = cfgcronday1.replace(/\s+/g, "").split(",");
                this.getConfigcapturecalendarcfgcapturedayenable1().setValue(cfgcronday1split[0]);
                this.getConfigcapturecalendarcfgcapturestarthour1().setValue(cfgcronday1split[1]);
                this.getConfigcapturecalendarcfgcapturestartminute1().setValue(cfgcronday1split[2]);
                this.getConfigcapturecalendarcfgcaptureendhour1().setValue(cfgcronday1split[3]);
                this.getConfigcapturecalendarcfgcaptureendminute1().setValue(cfgcronday1split[4]);
            } else {
                this.getConfigcapturecalendarcfgcapturedayenable1().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestarthour1().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestartminute1().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendhour1().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendminute1().setVisible(false);
            }

            if(configObj.hasOwnProperty("cfgcronday2")){
                var cfgcronday2 = configObj["cfgcronday2"];
                var cfgcronday2split = cfgcronday2.replace(/\s+/g, "").split(",");
                this.getConfigcapturecalendarcfgcapturedayenable2().setValue(cfgcronday2split[0]);
                this.getConfigcapturecalendarcfgcapturestarthour2().setValue(cfgcronday2split[1]);
                this.getConfigcapturecalendarcfgcapturestartminute2().setValue(cfgcronday2split[2]);
                this.getConfigcapturecalendarcfgcaptureendhour2().setValue(cfgcronday2split[3]);
                this.getConfigcapturecalendarcfgcaptureendminute2().setValue(cfgcronday2split[4]);
            } else {
                this.getConfigcapturecalendarcfgcapturedayenable2().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestarthour2().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestartminute2().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendhour2().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendminute2().setVisible(false);
            }

            if(configObj.hasOwnProperty("cfgcronday3")){
                var cfgcronday3 = configObj["cfgcronday3"];
                var cfgcronday3split = cfgcronday3.replace(/\s+/g, "").split(",");
                this.getConfigcapturecalendarcfgcapturedayenable3().setValue(cfgcronday3split[0]);
                this.getConfigcapturecalendarcfgcapturestarthour3().setValue(cfgcronday3split[1]);
                this.getConfigcapturecalendarcfgcapturestartminute3().setValue(cfgcronday3split[2]);
                this.getConfigcapturecalendarcfgcaptureendhour3().setValue(cfgcronday3split[3]);
                this.getConfigcapturecalendarcfgcaptureendminute3().setValue(cfgcronday3split[4]);
            } else {
                this.getConfigcapturecalendarcfgcapturedayenable3().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestarthour3().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestartminute3().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendhour3().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendminute3().setVisible(false);
            }

            if(configObj.hasOwnProperty("cfgcronday4")){
                var cfgcronday4 = configObj["cfgcronday4"];
                var cfgcronday4split = cfgcronday4.replace(/\s+/g, "").split(",");
                this.getConfigcapturecalendarcfgcapturedayenable4().setValue(cfgcronday4split[0]);
                this.getConfigcapturecalendarcfgcapturestarthour4().setValue(cfgcronday4split[1]);
                this.getConfigcapturecalendarcfgcapturestartminute4().setValue(cfgcronday4split[2]);
                this.getConfigcapturecalendarcfgcaptureendhour4().setValue(cfgcronday4split[3]);
                this.getConfigcapturecalendarcfgcaptureendminute4().setValue(cfgcronday4split[4]);
            } else {
                this.getConfigcapturecalendarcfgcapturedayenable4().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestarthour4().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestartminute4().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendhour4().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendminute4().setVisible(false);
            }

            if(configObj.hasOwnProperty("cfgcronday5")){
                var cfgcronday5 = configObj["cfgcronday5"];
                var cfgcronday5split = cfgcronday5.replace(/\s+/g, "").split(",");
                this.getConfigcapturecalendarcfgcapturedayenable5().setValue(cfgcronday5split[0]);
                this.getConfigcapturecalendarcfgcapturestarthour5().setValue(cfgcronday5split[1]);
                this.getConfigcapturecalendarcfgcapturestartminute5().setValue(cfgcronday5split[2]);
                this.getConfigcapturecalendarcfgcaptureendhour5().setValue(cfgcronday5split[3]);
                this.getConfigcapturecalendarcfgcaptureendminute5().setValue(cfgcronday5split[4]);
            } else {
                this.getConfigcapturecalendarcfgcapturedayenable5().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestarthour5().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestartminute5().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendhour5().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendminute5().setVisible(false);
            }

            if(configObj.hasOwnProperty("cfgcronday6")){
                var cfgcronday6 = configObj["cfgcronday6"];
                var cfgcronday6split = cfgcronday6.replace(/\s+/g, "").split(",");
                this.getConfigcapturecalendarcfgcapturedayenable6().setValue(cfgcronday6split[0]);
                this.getConfigcapturecalendarcfgcapturestarthour6().setValue(cfgcronday6split[1]);
                this.getConfigcapturecalendarcfgcapturestartminute6().setValue(cfgcronday6split[2]);
                this.getConfigcapturecalendarcfgcaptureendhour6().setValue(cfgcronday6split[3]);
                this.getConfigcapturecalendarcfgcaptureendminute6().setValue(cfgcronday6split[4]);
            } else {
                this.getConfigcapturecalendarcfgcapturedayenable6().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestarthour6().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestartminute6().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendhour6().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendminute6().setVisible(false);
            }

            if(configObj.hasOwnProperty("cfgcronday7")){
                var cfgcronday7 = configObj["cfgcronday7"];
                var cfgcronday7split = cfgcronday7.replace(/\s+/g, "").split(",");
                this.getConfigcapturecalendarcfgcapturedayenable7().setValue(cfgcronday7split[0]);
                this.getConfigcapturecalendarcfgcapturestarthour7().setValue(cfgcronday7split[1]);
                this.getConfigcapturecalendarcfgcapturestartminute7().setValue(cfgcronday7split[2]);
                this.getConfigcapturecalendarcfgcaptureendhour7().setValue(cfgcronday7split[3]);
                this.getConfigcapturecalendarcfgcaptureendminute7().setValue(cfgcronday7split[4]);
            } else {
                this.getConfigcapturecalendarcfgcapturedayenable7().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestarthour7().setVisible(false);
                this.getConfigcapturecalendarcfgcapturestartminute7().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendhour7().setVisible(false);
                this.getConfigcapturecalendarcfgcaptureendminute7().setVisible(false);
            }

            var configObj = {};
            this.getConfigSectionCaptureStore().each(function (rec) {
                var configName = rec.get("NAME");
                configObj[configName] = true;
            });

            this.getConfigmain().setLoading(false); 
        }

    }

    /*
     * Disable the save and cancel button, used when nothing has changed (inital stage after data is loaded for example) 
     * @returns {undefined}
     */
    , disableAllConfigScreens: function() {
        this.consoleLog("disableAllConfigScreens()");
        this.getConfigcapturesavesavebutton().setDisabled(true);
        this.getConfigcapturesavecancelbutton().setDisabled(true);
    }

    /*
     * After something has changed, enable the save and cancel button so that the user can actually trigger the associated action. 
     * @returns {undefined}
     */
    , enableAllConfigScreens: function() {
        this.consoleLog("enableAllConfigScreens()");
        this.getConfigcapturesavesavebutton().setDisabled(false);
        this.getConfigcapturesavecancelbutton().setDisabled(false);
    }
    
    
    /*
     * Caluclate the number of dirty records update the sync status and message about configuration change
     */
    , checkModifiedConfigStores: function() {
        this.consoleLog("checkModifiedConfigStores()");
        var dirtyRecords = 0;
        this.getConfigCaptureStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getConfigVideoStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getConfigVideoCustomStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getConfigVideoPostStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getConfigFTPServersStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        if (dirtyRecords > 0) {
            this.getConfigcapturesavestatus().setHtml(i18n.gettext("Configuration has been modified"));
            this.setConfigurationSyncStatus(false);
            this.getConfigcapturesavecancelbutton().setDisabled(false);
        } else {
            this.getConfigcapturesavestatus().setHtml(i18n.gettext("No configuration changes"));
            this.setConfigurationSyncStatus(true);
            this.getConfigcapturesavecancelbutton().setDisabled(true);
        }
    }
    /*
     * This function is triggerd when some of the input fields are updated. It then update the configuration store.
     * 
     * @param {type} newValue
     * @param {type} oldValue
     * @param {type} configName
     * @returns {undefined}
     */
    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getConfigCaptureStore().findRecord("NAME", configName, 0, false, false, true);
        if (configRecord !== undefined && configRecord !== null) {
            if (configRecord.get("VALUE") != newValue) {
                this.consoleLog("updateStoreValue(): update config: " + configName + " from: " + configRecord.get("VALUE") + " to: " + newValue, "info");
                configRecord.set("VALUE", newValue);
                this.checkModifiedConfigStores();
            }
        } else {
            this.consoleLog("updateStoreValue(): Unable to find: " + configName, "warn");
        }
    }
    
    /*
     * Similar to the above but dedicated to the calendar which has a slightly more complex logic
     * @param {type} modifiedDay
     * @returns {undefined}
     */
    , updateCalendarSchedule: function(modifiedDay) {
        this.consoleLog("updateCalendarSchedule()");
        if (modifiedDay === 1) {
            var cfgcapturedayenable = this.getConfigcapturecalendarcfgcapturedayenable1().getValue();
            var cfgcapturestarthour = this.getConfigcapturecalendarcfgcapturestarthour1().getValue();
            var cfgcapturestartminute = this.getConfigcapturecalendarcfgcapturestartminute1().getValue();
            var cfgcaptureendhour = this.getConfigcapturecalendarcfgcaptureendhour1().getValue();
            var cfgcaptureendminute = this.getConfigcapturecalendarcfgcaptureendminute1().getValue();
        } else if (modifiedDay === 2) {
            var cfgcapturedayenable = this.getConfigcapturecalendarcfgcapturedayenable2().getValue();
            var cfgcapturestarthour = this.getConfigcapturecalendarcfgcapturestarthour2().getValue();
            var cfgcapturestartminute = this.getConfigcapturecalendarcfgcapturestartminute2().getValue();
            var cfgcaptureendhour = this.getConfigcapturecalendarcfgcaptureendhour2().getValue();
            var cfgcaptureendminute = this.getConfigcapturecalendarcfgcaptureendminute2().getValue();
        } else if (modifiedDay === 3) {
            var cfgcapturedayenable = this.getConfigcapturecalendarcfgcapturedayenable3().getValue();
            var cfgcapturestarthour = this.getConfigcapturecalendarcfgcapturestarthour3().getValue();
            var cfgcapturestartminute = this.getConfigcapturecalendarcfgcapturestartminute3().getValue();
            var cfgcaptureendhour = this.getConfigcapturecalendarcfgcaptureendhour3().getValue();
            var cfgcaptureendminute = this.getConfigcapturecalendarcfgcaptureendminute3().getValue();
        } else if (modifiedDay === 4) {
            var cfgcapturedayenable = this.getConfigcapturecalendarcfgcapturedayenable4().getValue();
            var cfgcapturestarthour = this.getConfigcapturecalendarcfgcapturestarthour4().getValue();
            var cfgcapturestartminute = this.getConfigcapturecalendarcfgcapturestartminute4().getValue();
            var cfgcaptureendhour = this.getConfigcapturecalendarcfgcaptureendhour4().getValue();
            var cfgcaptureendminute = this.getConfigcapturecalendarcfgcaptureendminute4().getValue();
        } else if (modifiedDay === 5) {
            var cfgcapturedayenable = this.getConfigcapturecalendarcfgcapturedayenable5().getValue();
            var cfgcapturestarthour = this.getConfigcapturecalendarcfgcapturestarthour5().getValue();
            var cfgcapturestartminute = this.getConfigcapturecalendarcfgcapturestartminute5().getValue();
            var cfgcaptureendhour = this.getConfigcapturecalendarcfgcaptureendhour5().getValue();
            var cfgcaptureendminute = this.getConfigcapturecalendarcfgcaptureendminute5().getValue();
        } else if (modifiedDay === 6) {
            var cfgcapturedayenable = this.getConfigcapturecalendarcfgcapturedayenable6().getValue();
            var cfgcapturestarthour = this.getConfigcapturecalendarcfgcapturestarthour6().getValue();
            var cfgcapturestartminute = this.getConfigcapturecalendarcfgcapturestartminute6().getValue();
            var cfgcaptureendhour = this.getConfigcapturecalendarcfgcaptureendhour6().getValue();
            var cfgcaptureendminute = this.getConfigcapturecalendarcfgcaptureendminute6().getValue();
        } else if (modifiedDay === 7) {
            var cfgcapturedayenable = this.getConfigcapturecalendarcfgcapturedayenable7().getValue();
            var cfgcapturestarthour = this.getConfigcapturecalendarcfgcapturestarthour7().getValue();
            var cfgcapturestartminute = this.getConfigcapturecalendarcfgcapturestartminute7().getValue();
            var cfgcaptureendhour = this.getConfigcapturecalendarcfgcaptureendhour7().getValue();
            var cfgcaptureendminute = this.getConfigcapturecalendarcfgcaptureendminute7().getValue();
        }
        var configRecord = this.getConfigCaptureStore().findRecord("NAME", "cfgcronday" + modifiedDay, 0, false, false, true);
        if (configRecord !== undefined && cfgcapturestarthour !== null && cfgcapturestartminute !== null && cfgcaptureendhour !== null && cfgcaptureendminute !== null) {
            if (cfgcapturedayenable === true) {cfgcapturedayenable = "yes"} else {cfgcapturedayenable = "no"}
            if (cfgcapturestarthour < 10) {cfgcapturestarthour = "0" + cfgcapturestarthour}
            if (cfgcapturestartminute < 10) {cfgcapturestartminute = "0" + cfgcapturestartminute}
            if (cfgcaptureendhour < 10) {cfgcaptureendhour = "0" + cfgcaptureendhour}
            if (cfgcaptureendminute < 10) {cfgcaptureendminute = "0" + cfgcaptureendminute}
            //yes, 00, 00, 00, 00
            var cfgcronday = cfgcapturedayenable + "," + cfgcapturestarthour + ","  + cfgcapturestartminute + "," + cfgcaptureendhour + "," + cfgcaptureendminute
            if (configRecord.get("VALUE") != cfgcronday) {
                this.consoleLog("updateCalendarSchedule(): update config: cfgcronday" + modifiedDay + " from: " + configRecord.get("VALUE") + " to: " + cfgcronday, "info");
                configRecord.set("VALUE", cfgcronday);
                this.checkModifiedConfigStores();
            }
        }
    }    

    /*
     * When clicking on the cancel button, remove all dirty records to return to the initial configuration state
     * @returns {undefined}
     */
    , cancelConfigurationChanges: function() {
        this.consoleLog("cancelConfigurationChanges()");
        this.getConfigCaptureStore().each(function (rec) {
            if (rec.dirty === true) {rec.reject();}
        });
        this.loadSourceConfiguration();
    }    

    /*
     * When clicking on the save button, update all records tagged as dirty in the store
     */
    , saveConfigurationChanges: function() {
        this.consoleLog("saveConfigurationChanges()");
        if (this.getConfigurationSyncStatus() === false) {
            var requiredStores = [];
            var isDirty = false;
            this.getConfigCaptureStore().each(function (rec) {if (rec.dirty === true) {isDirty = true;}});
            if (isDirty === true) {requiredStores.push({store: this.getConfigCaptureStore(), action: "SYNC"});}
            this.fireEvent("WPAKT.controller.core.loading.SyncStores.beginLoading"
                , "WEB_CFG_SOURCESCONFIGSYNC"
                , "WPAKT.controller.config.Config.configurationSaved"
                , requiredStores);
        } else {
            Ext.Msg.show({
                title: i18n.gettext("Configuration")
                , msg: i18n.gettext("No configuration changes detected, nothing to save")
                , buttons: Ext.Msg.OK
                , icon: Ext.Msg.INFO
            });
        }
    }
    
    /*
     * Display message after configuration has been saved
     */
    , configurationSaved: function() {
        this.consoleLog("configurationSaved()");
        this.checkModifiedConfigStores();
        Ext.Msg.show({
            title: i18n.gettext("Configuration")
            , msg: i18n.gettext("Configuration has been saved")
            , buttons: Ext.Msg.OK
            , icon: Ext.Msg.INFO
        });
    }    
});