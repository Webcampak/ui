/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.sourcesconfiguration.advanced.Advanced");
//</debug>
Ext.define("WPAKD.controller.sourcesconfiguration.advanced.Advanced", {
    extend: "Ext.app.Controller",

    views: [
        "sourcesconfiguration.advanced.Main"

        , "sourcesconfiguration.advanced.emails.Main"
        , "sourcesconfiguration.advanced.emails.Cfgemailalertfailure"
        , "sourcesconfiguration.advanced.emails.Cfgemailalertreminder"
        , "sourcesconfiguration.advanced.emails.Cfgemailalwaysnotify"
        , "sourcesconfiguration.advanced.emails.Cfgemaildirectalert"
        , "sourcesconfiguration.advanced.emails.Cfgemailschedulealert"
        , "sourcesconfiguration.advanced.emails.Cfgemailreplyto"
        , "sourcesconfiguration.advanced.emails.Cfgemailsendcc"
        , "sourcesconfiguration.advanced.emails.Cfgemailsendto"

    ],

    stores: [
        "shared.Sources"
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.ConfigurationTabs"

    ],

    models: [
        "shared.Sources"
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.ConfigurationTabs"

    ],

    refs: [
        {ref: "sourcesconfigurationadvancedmain",           selector: "sourcesconfigurationadvancedmain"        }

        , {ref: "sourcesconfigurationadvancedemailsmain",                   selector: "sourcesconfigurationadvancedemailsmain"                      }
        , {ref: "sourcesconfigurationadvancedemailscfgemailalertfailure",   selector: "sourcesconfigurationadvancedemailscfgemailalertfailure"      }
        , {ref: "sourcesconfigurationadvancedemailscfgemailalertreminder",  selector: "sourcesconfigurationadvancedemailscfgemailalertreminder"     }
        , {ref: "sourcesconfigurationadvancedemailscfgemailalwaysnotify",   selector: "sourcesconfigurationadvancedemailscfgemailalwaysnotify"      }
        , {ref: "sourcesconfigurationadvancedemailscfgemaildirectalert",    selector: "sourcesconfigurationadvancedemailscfgemaildirectalert"       }
        , {ref: "sourcesconfigurationadvancedemailscfgemailschedulealert",  selector: "sourcesconfigurationadvancedemailscfgemailschedulealert"     }

    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "*": {
                "WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue": this.updateStoreValue
            }
        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.sourcesconfiguration.advanced.Advanced.loadSettings": this.loadSettings
                      , "WPAKD.controller.sourcesconfiguration.advanced.Advanced.clearFTPServer":   this.clearFTPServer
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration->Advanced: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getSourcesconfigurationCaptureStore().findRecord("NAME", configName, 0, false, false, true);
        if (configRecord !== undefined && configRecord !== null) {
            if (configRecord.get("VALUE") != newValue) {
                this.consoleLog("updateStoreValue(): update config: " + configName + " from: " + configRecord.get("VALUE") + " to: " + newValue, "info");
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
            this.getSourcesconfigurationadvancedmain().setVisible(false);
        } else {
            var scope = this;
            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getSourcesconfigurationCaptureStore().each(function (rec) {
                var configValue = rec.get("VALUE");
                var configName = rec.get("NAME");
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty("cfgemailalertfailure")){this.getSourcesconfigurationadvancedemailscfgemailalertfailure().setValue(configObj["cfgemailalertfailure"]);
            } else {this.getSourcesconfigurationadvancedemailscfgemailalertfailure().setVisible(false);}
            if(configObj.hasOwnProperty("cfgemailalertreminder")){this.getSourcesconfigurationadvancedemailscfgemailalertreminder().setValue(configObj["cfgemailalertreminder"]);
            } else {this.getSourcesconfigurationadvancedemailscfgemailalertreminder().setVisible(false);}
            if(configObj.hasOwnProperty("cfgemailalwaysnotify")){this.getSourcesconfigurationadvancedemailscfgemailalwaysnotify().setValue(configObj["cfgemailalwaysnotify"]);
            } else {this.getSourcesconfigurationadvancedemailscfgemailalwaysnotify().setVisible(false);}

            if(configObj.hasOwnProperty("cfgemaildirectalert")){this.getSourcesconfigurationadvancedemailscfgemaildirectalert().setValue(configObj["cfgemaildirectalert"]);
            } else {this.getSourcesconfigurationadvancedemailscfgemaildirectalert().setVisible(false);}
            if(configObj.hasOwnProperty("cfgemailschedulealert")){this.getSourcesconfigurationadvancedemailscfgemailschedulealert().setValue(configObj["cfgemailschedulealert"]);
            } else {this.getSourcesconfigurationadvancedemailscfgemailschedulealert().setVisible(false);}


            var configObj = {};
            this.getSourcesconfigurationSectionCaptureStore().each(function (rec) {
                var configName = rec.get("NAME");
                configObj[configName] = true;
            });
            if(!configObj.hasOwnProperty("email")){this.getSourcesconfigurationadvancedemailsmain().setVisible(false);}

            this.getSourcesconfigurationadvancedmain().setDisabled(false);
        }
    }


});
