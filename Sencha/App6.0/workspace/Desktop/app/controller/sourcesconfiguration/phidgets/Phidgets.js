/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.sourcesconfiguration.phidgets.Phidgets");
//</debug>
Ext.define("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets", {
    extend: "Ext.app.Controller",

    views: [
        "sourcesconfiguration.phidgets.Main"

        , "sourcesconfiguration.phidgets.graphs.Main"
        , "sourcesconfiguration.phidgets.graphs.Cfgftpphidgetserverid"
        , "sourcesconfiguration.phidgets.graphs.Cfgftpphidgetserverretry"
        , "sourcesconfiguration.phidgets.graphs.Cfgphidgetsensorsgraph"

        , "sourcesconfiguration.phidgets.relays.Main"
        , "sourcesconfiguration.phidgets.relays.Cfgphidgetcameraport"
        , "sourcesconfiguration.phidgets.relays.Cfgphidgeterroractivate"
        , "sourcesconfiguration.phidgets.relays.Cfgphidgetfailure"

        , "sourcesconfiguration.phidgets.sensors.Main"
        , "sourcesconfiguration.phidgets.sensors.PhidgetsPortsList"
        , "sourcesconfiguration.phidgets.sensors.SensorsList"
    ],

    stores: [
        "shared.Sources"
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.ConfigurationTabs"

        , "sourcesconfiguration.PhidgetPorts"
    ],

    models: [
        "shared.Sources"
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.ConfigurationTabs"

        , "sourcesconfiguration.PhidgetPorts"
    ],

    refs: [
        {ref: "sourcesconfigurationphidgetsmain",           selector: "sourcesconfigurationphidgetsmain"        }

        , {ref: "sourcesconfigurationphidgetsrelaysmain",                       selector: "sourcesconfigurationphidgetsrelaysmain"                      }
        , {ref: "sourcesconfigurationphidgetsrelayscfgphidgeterroractivate",    selector: "sourcesconfigurationphidgetsrelayscfgphidgeterroractivate"   }
        , {ref: "sourcesconfigurationphidgetsrelayscfgphidgetfailure",          selector: "sourcesconfigurationphidgetsrelayscfgphidgetfailure"         }
        , {ref: "sourcesconfigurationphidgetsrelayscfgphidgetcameraport",       selector: "sourcesconfigurationphidgetsrelayscfgphidgetcameraport"      }

        , {ref: "sourcesconfigurationphidgetsgraphsmain",                       selector: "sourcesconfigurationphidgetsgraphsmain"                      }
        , {ref: "sourcesconfigurationphidgetsgraphscfgphidgetsensorsgraph",     selector: "sourcesconfigurationphidgetsgraphscfgphidgetsensorsgraph"    }
        , {ref: "sourcesconfigurationphidgetsgraphscfgftpphidgetserverid",      selector: "sourcesconfigurationphidgetsgraphscfgftpphidgetserverid"     }
        , {ref: "sourcesconfigurationphidgetsgraphscfgftpphidgetserverretry",   selector: "sourcesconfigurationphidgetsgraphscfgftpphidgetserverretry"  }

        , {ref: "sourcesconfigurationphidgetssensorsmain",              selector: "sourcesconfigurationphidgetssensorsmain"                 }
        , {ref: "sourcesconfigurationphidgetssensorsphidgetsportslist", selector: "sourcesconfigurationphidgetssensorsphidgetsportslist"    }
        , {ref: "sourcesconfigurationphidgetssensorssensorslist",       selector: "sourcesconfigurationphidgetssensorssensorslist"          }

    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "*": {
                "WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.updateStoreValue": this.updateStoreValue
            }
            , "sourcesconfigurationphidgetssensorssensorslist":  {edit:    this.phidgetSensorsModified }
        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.loadSettings":       this.loadSettings
                      , "WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.clearFTPServer":   this.clearFTPServer
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration->Phidgets: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getSourcesconfigurationCaptureStore().findRecord("NAME", configName, 0, false, false, true);
        if (configRecord !== undefined && configRecord !== null) {
            var storeValue = configRecord.get("VALUE");
            if (typeof newValue !== typeof storeValue) {
                if (typeof newValue === 'string') {storeValue = String(storeValue)}
                if (typeof newValue === 'number') {storeValue = Number(storeValue)}
            }
            if (storeValue !== newValue) {
                this.consoleLog("updateStoreValue(): update config: " + configName + " from: " + storeValue + " to: " + newValue, "info");
                configRecord.set("VALUE", newValue);
                this.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores");
            }
        } else {
            this.consoleLog("updateStoreValue(): Unable to find: " + configName, "warn");
        }
    }

    , loadSettings: function() {
        this.consoleLog("loadSettings()");
        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord("NAME", "config-source", 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationphidgetsmain().setVisible(false);
        } else {
            var scope = this;
            //We store the content of the store in a Javascript object
            var configObj = {};
            var configName = null;
            this.getSourcesconfigurationCaptureStore().each(function (rec) {
                configName = rec.get("NAME");
                configObj[configName] = rec.get("VALUE");
            });

            if(configObj.hasOwnProperty("cfgphidgeterroractivate")){this.getSourcesconfigurationphidgetsrelayscfgphidgeterroractivate().setValue(configObj["cfgphidgeterroractivate"]);
            } else {this.getSourcesconfigurationphidgetsrelayscfgphidgeterroractivate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgphidgetfailure")){this.getSourcesconfigurationphidgetsrelayscfgphidgetfailure().setValue(configObj["cfgphidgetfailure"]);
            } else {this.getSourcesconfigurationphidgetsrelayscfgphidgetfailure().setVisible(false);}
            if(configObj.hasOwnProperty("cfgphidgetcameraport")){this.getSourcesconfigurationphidgetsrelayscfgphidgetcameraport().setValue(configObj["cfgphidgetcameraport"]);
            } else {this.getSourcesconfigurationphidgetsrelayscfgphidgetcameraport().setVisible(false);}

            if(configObj.hasOwnProperty("cfgphidgetsensorsgraph")){this.getSourcesconfigurationphidgetsgraphscfgphidgetsensorsgraph().setValue(configObj["cfgphidgetsensorsgraph"]);
            } else {this.getSourcesconfigurationphidgetsgraphscfgphidgetsensorsgraph().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftpphidgetserverid")){this.getSourcesconfigurationphidgetsgraphscfgftpphidgetserverid().setValue(configObj["cfgftpphidgetserverid"]);
            } else {this.getSourcesconfigurationphidgetsgraphscfgftpphidgetserverid().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftpphidgetserverretry")){this.getSourcesconfigurationphidgetsgraphscfgftpphidgetserverretry().setValue(configObj["cfgftpphidgetserverretry"]);
            } else {this.getSourcesconfigurationphidgetsgraphscfgftpphidgetserverretry().setVisible(false);}

            // Load phidget configuration into a specific memory store
            if (configObj.hasOwnProperty("cfgphidgetsensornb")) {
                var sensorNb = configObj["cfgphidgetsensornb"];
                for (i = 1; i < sensorNb + 1; i++) {
                    if (configObj.hasOwnProperty("cfgphidgetsensor" + i)) {
                        var currentConfig = configObj["cfgphidgetsensor" + i];
                        var currentConfigArray = currentConfig.split(",");
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

            configObj = {};
            this.getSourcesconfigurationSectionCaptureStore().each(function (rec) {
                configName = rec.get("NAME");
                configObj[configName] = true;
            });
            //if(!configObj.hasOwnProperty("email")){this.getSourcesconfigurationphidgetsemailsmain().setVisible(false);}
            if(!configObj.hasOwnProperty("phidget")){this.getSourcesconfigurationphidgetsphidgetmain().setVisible(false);}

            this.getSourcesconfigurationphidgetsmain().setDisabled(false);
        }
    }

    , clearFTPServer: function(serverId) {
        this.consoleLog("clearFTPServer()");
        if (this.getSourcesconfigurationphidgetsphidgetcfgftpphidgetserverid().getValue() === serverId) {
           this.getSourcesconfigurationphidgetsphidgetcfgftpphidgetserverid().setValue();
        }
    }

    , phidgetSensorsModified: function() {
        this.consoleLog("phidgetSensorsModified()");
        var scope = this;
        //Build Phidget sensor string based on values in table
        this.getSourcesconfigurationPhidgetPortsStore().each(function (rec) {
            var configName = "cfgphidgetsensor" + rec.get("ID");
            var newValue = rec.get("NAME") + "," + rec.get("PORT") + "," + rec.get("LEGEND") + "," + rec.get("COLOR");
            var configRecord = scope.getSourcesconfigurationCaptureStore().findRecord("NAME", configName, 0, false, false, true);
            if (configRecord !== undefined && configRecord !== null) {
                if (configRecord.get("VALUE") !== newValue) {
                    scope.consoleLog("phidgetSensorsModified(): update config: " + configName + " from: " + configRecord.get("VALUE") + " to: " + newValue, "info");
                    configRecord.set("VALUE", newValue);
                    scope.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores");
                }
            } else {
                scope.consoleLog("phidgetSensorsModified(): Unable to find: " + configName, "warn");
            }
        });
    }

});
