//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.sourcesconfiguration.advanced.Advanced');
//</debug>
Ext.define('WPAKD.controller.sourcesconfiguration.advanced.Advanced', {
    extend: 'Ext.app.Controller',

    views: [
        'sourcesconfiguration.advanced.Main'

        , 'sourcesconfiguration.advanced.ftp.Main'
        , 'sourcesconfiguration.advanced.ftp.Cfglocalftppass'
        , 'sourcesconfiguration.advanced.ftp.Cfglocalftpusername'

        , 'sourcesconfiguration.advanced.emails.Main'
        , 'sourcesconfiguration.advanced.emails.Cfgemailalertfailure'
        , 'sourcesconfiguration.advanced.emails.Cfgemailalertreminder'
        , 'sourcesconfiguration.advanced.emails.Cfgemailalwaysnotify'
        , 'sourcesconfiguration.advanced.emails.Cfgemailreplyto'
        , 'sourcesconfiguration.advanced.emails.Cfgemailsendcc'
        , 'sourcesconfiguration.advanced.emails.Cfgemailsendto'

        , 'sourcesconfiguration.advanced.phidget.Main'
        , 'sourcesconfiguration.advanced.phidget.Cfgftpphidgetserverid'
        , 'sourcesconfiguration.advanced.phidget.Cfgftpphidgetserverretry'
        , 'sourcesconfiguration.advanced.phidget.Cfgphidgetcameraport'
        , 'sourcesconfiguration.advanced.phidget.Cfgphidgeterroractivate'
        , 'sourcesconfiguration.advanced.phidget.Cfgphidgetfailure'
        , 'sourcesconfiguration.advanced.phidget.Cfgphidgetsensorsgraph'


    ],

    stores: [
        'shared.Sources'
        , 'sourcesconfiguration.Capture'
        , 'sourcesconfiguration.SectionCapture'
        , 'sourcesconfiguration.ConfigurationTabs'

    ],

    models: [
        'shared.Sources'
        , 'sourcesconfiguration.Capture'
        , 'sourcesconfiguration.SectionCapture'
        , 'sourcesconfiguration.ConfigurationTabs'

    ],

    refs: [
        {ref: 'sourcesconfigurationadvancedmain',           selector: 'sourcesconfigurationadvancedmain'        }

        , {ref: 'sourcesconfigurationadvancedftpmain',                  selector: 'sourcesconfigurationadvancedftpmain'                 }
        , {ref: 'sourcesconfigurationadvancedftpcfglocalftppass',       selector: 'sourcesconfigurationadvancedftpcfglocalftppass'      }
        , {ref: 'sourcesconfigurationadvancedftpcfglocalftpusername',   selector: 'sourcesconfigurationadvancedftpcfglocalftpusername'  }

        , {ref: 'sourcesconfigurationadvancedemailsmain',                   selector: 'sourcesconfigurationadvancedemailsmain'                      }
        , {ref: 'sourcesconfigurationadvancedemailscfgemailalertfailure',   selector: 'sourcesconfigurationadvancedemailscfgemailalertfailure'      }
        , {ref: 'sourcesconfigurationadvancedemailscfgemailalertreminder',  selector: 'sourcesconfigurationadvancedemailscfgemailalertreminder'     }
        , {ref: 'sourcesconfigurationadvancedemailscfgemailalwaysnotify',   selector: 'sourcesconfigurationadvancedemailscfgemailalwaysnotify'      }

        , {ref: 'sourcesconfigurationadvancedphidgetmain',                      selector: 'sourcesconfigurationadvancedphidgetmain'                     }
        , {ref: 'sourcesconfigurationadvancedphidgetcfgftpphidgetserverid',     selector: 'sourcesconfigurationadvancedphidgetcfgftpphidgetserverid'    }
        , {ref: 'sourcesconfigurationadvancedphidgetcfgftpphidgetserverretry',  selector: 'sourcesconfigurationadvancedphidgetcfgftpphidgetserverretry' }
        , {ref: 'sourcesconfigurationadvancedphidgetcfgphidgetcameraport',      selector: 'sourcesconfigurationadvancedphidgetcfgphidgetcameraport'     }
        , {ref: 'sourcesconfigurationadvancedphidgetcfgphidgeterroractivate',   selector: 'sourcesconfigurationadvancedphidgetcfgphidgeterroractivate'  }
        , {ref: 'sourcesconfigurationadvancedphidgetcfgphidgetfailure',         selector: 'sourcesconfigurationadvancedphidgetcfgphidgetfailure'        }
        , {ref: 'sourcesconfigurationadvancedphidgetcfgphidgetsensorsgraph',    selector: 'sourcesconfigurationadvancedphidgetcfgphidgetsensorsgraph'   }

    ]

    , init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration: Controller init: function()');
        this.control({
            '*': {
                'WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue': this.updateStoreValue
            }
        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.sourcesconfiguration.advanced.Advanced.loadSettings': this.loadSettings
                      , 'WPAKD.controller.sourcesconfiguration.advanced.Advanced.clearFTPServer':   this.clearFTPServer
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration->Advanced: ';
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

    , loadSettings: function() {
        this.consoleLog('loadSettings()');
        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord('NAME', 'config-source', 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationadvancedmain().setVisible(false);
        } else {
            var scope = this;
            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getSourcesconfigurationCaptureStore().each(function (rec) {
                var configValue = rec.get('VALUE');
                var configName = rec.get('NAME');
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty('cfglocalftppass')){
                this.getSourcesconfigurationadvancedftpcfglocalftppass().setValue(configObj['cfglocalftppass']);
                this.getSourcesconfigurationadvancedftpcfglocalftpusername().setValue('source' + this.getSourcesconfigurationCaptureStore().getProxy().extraParams.SOURCEID);
            } else {
                this.getSourcesconfigurationadvancedftpcfglocalftppass().setVisible(false);
                this.getSourcesconfigurationadvancedftpcfglocalftpusername().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgemailalertfailure')){this.getSourcesconfigurationadvancedemailscfgemailalertfailure().setValue(configObj['cfgemailalertfailure']);
            } else {this.getSourcesconfigurationadvancedemailscfgemailalertfailure().setVisible(false);}
            if(configObj.hasOwnProperty('cfgemailalertreminder')){this.getSourcesconfigurationadvancedemailscfgemailalertreminder().setValue(configObj['cfgemailalertreminder']);
            } else {this.getSourcesconfigurationadvancedemailscfgemailalertreminder().setVisible(false);}
            if(configObj.hasOwnProperty('cfgemailalwaysnotify')){this.getSourcesconfigurationadvancedemailscfgemailalwaysnotify().setValue(configObj['cfgemailalwaysnotify']);
            } else {this.getSourcesconfigurationadvancedemailscfgemailalwaysnotify().setVisible(false);}

            if(configObj.hasOwnProperty('cfgftpphidgetserverid')){this.getSourcesconfigurationadvancedphidgetcfgftpphidgetserverid().setValue(configObj['cfgftpphidgetserverid']);
            } else {this.getSourcesconfigurationadvancedphidgetcfgftpphidgetserverid().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftpphidgetserverretry')){this.getSourcesconfigurationadvancedphidgetcfgftpphidgetserverretry().setValue(configObj['cfgftpphidgetserverretry']);
            } else {this.getSourcesconfigurationadvancedphidgetcfgftpphidgetserverretry().setVisible(false);}
            if(configObj.hasOwnProperty('cfgphidgetcameraport')){this.getSourcesconfigurationadvancedphidgetcfgphidgetcameraport().setValue(configObj['cfgphidgetcameraport']);
            } else {this.getSourcesconfigurationadvancedphidgetcfgphidgetcameraport().setVisible(false);}
            if(configObj.hasOwnProperty('cfgphidgeterroractivate')){this.getSourcesconfigurationadvancedphidgetcfgphidgeterroractivate().setValue(configObj['cfgphidgeterroractivate']);
            } else {this.getSourcesconfigurationadvancedphidgetcfgphidgeterroractivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgphidgetfailure')){this.getSourcesconfigurationadvancedphidgetcfgphidgetfailure().setValue(configObj['cfgphidgetfailure']);
            } else {this.getSourcesconfigurationadvancedphidgetcfgphidgetfailure().setVisible(false);}
            if(configObj.hasOwnProperty('cfgphidgetsensorsgraph')){this.getSourcesconfigurationadvancedphidgetcfgphidgetsensorsgraph().setValue(configObj['cfgphidgetsensorsgraph']);
            } else {this.getSourcesconfigurationadvancedphidgetcfgphidgetsensorsgraph().setVisible(false);}

            var configObj = {};
            this.getSourcesconfigurationSectionCaptureStore().each(function (rec) {
                var configName = rec.get('NAME');
                configObj[configName] = true;
            });
            if(!configObj.hasOwnProperty('email')){this.getSourcesconfigurationadvancedemailsmain().setVisible(false);}
            if(!configObj.hasOwnProperty('phidget')){this.getSourcesconfigurationadvancedphidgetmain().setVisible(false);}

            this.getSourcesconfigurationadvancedmain().setDisabled(false);
        }
    }

    , clearFTPServer: function(serverId) {
        this.consoleLog('clearFTPServer()');
        if (this.getSourcesconfigurationadvancedphidgetcfgftpphidgetserverid().getValue() == serverId) {
           this.getSourcesconfigurationadvancedphidgetcfgftpphidgetserverid().setValue();
        }
    }

});
