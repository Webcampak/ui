/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.systemconfiguration.SystemConfiguration");
//</debug>
Ext.define("WPAKD.controller.systemconfiguration.SystemConfiguration", {
    extend: "Ext.app.Controller",

    views: [
        "desktop.toolbar.top.Taskbar"
        , "systemconfiguration.Main"
        , "systemconfiguration.SystemConfiguration"
        , "systemconfiguration.SystemConfigurationChanges"
        , "systemconfiguration.ButtonCancel"
        , "systemconfiguration.ButtonSave"

        , "systemconfiguration.general.Main"
        , "systemconfiguration.general.Cfgnetif"
        , "systemconfiguration.general.Cfgftpresourcespassword"
        , "systemconfiguration.general.Cfgftpresourcesusername"
        , "systemconfiguration.general.Cfggphotoports"
        , "systemconfiguration.general.Cfggphotoportscameras"
        , "systemconfiguration.general.Cfgphidgetactivate"
        , "systemconfiguration.general.Cfgservertimezone"
        , "systemconfiguration.general.Cfgstatsactivate"
        , "systemconfiguration.general.Cfgxferthreads"
        , "systemconfiguration.general.Cfgxfermaxfilesperthread"
        , "systemconfiguration.reboot.Main"
        , "systemconfiguration.reboot.ButtonReboot"

    ],

    stores: [
        "shared.Timezones"
        , "systemconfiguration.SystemConfiguration"

    ],

    models: [
        "shared.Timezones"
        , "systemconfiguration.SystemConfiguration"

    ],

    refs: [
        {ref: "desktopmain",                selector: "desktopmain"                 }
        , {ref: "desktoptoolbartoptaskbar", selector: "desktoptoolbartoptaskbar"    }

        , {ref: "systemconfigurationmain",                        selector: "systemconfigurationmain",                      autoCreate: true,   xtype: "systemconfigurationmain"      }
        , {ref: "systemconfigurationsystemconfiguration",         selector: "systemconfigurationsystemconfiguration"        }
        , {ref: "systemconfigurationsystemconfigurationchanges",  selector: "systemconfigurationsystemconfigurationchanges" }
        , {ref: "systemconfigurationbuttoncancel",                selector: "systemconfigurationbuttoncancel"               }
        , {ref: "systemconfigurationbuttonsave",                  selector: "systemconfigurationbuttonsave"                 }

        , {ref: "systemconfigurationgeneralmain",                       selector: "systemconfigurationgeneralmain"                      }
        , {ref: "systemconfigurationgeneralcfgnetif",                   selector: "systemconfigurationgeneralcfgnetif"                  }
        , {ref: "systemconfigurationgeneralcfgxferthreads",             selector: "systemconfigurationgeneralcfgxferthreads"            }
        , {ref: "systemconfigurationgeneralcfgxfermaxfilesperthread",   selector: "systemconfigurationgeneralcfgxfermaxfilesperthread"  }
        , {ref: "systemconfigurationgeneralcfgftpresourcespassword",    selector: "systemconfigurationgeneralcfgftpresourcespassword"   }
        , {ref: "systemconfigurationgeneralcfgftpresourcesusername",    selector: "systemconfigurationgeneralcfgftpresourcesusername"   }
        , {ref: "systemconfigurationgeneralcfggphotoports",             selector: "systemconfigurationgeneralcfggphotoports"            }
        , {ref: "systemconfigurationgeneralcfggphotoportscameras",      selector: "systemconfigurationgeneralcfggphotoportscameras"     }
        , {ref: "systemconfigurationgeneralcfgphidgetactivate",         selector: "systemconfigurationgeneralcfgphidgetactivate"        }
        , {ref: "systemconfigurationgeneralcfgservertimezone",          selector: "systemconfigurationgeneralcfgservertimezone"         }
        , {ref: "systemconfigurationgeneralcfgstatsactivate",           selector: "systemconfigurationgeneralcfgstatsactivate"          }
        , {ref: "systemconfigurationrebootmain",                        selector: "systemconfigurationrebootmain"                       }
        , {ref: "systemconfigurationrebootbuttonreboot",                selector: "systemconfigurationrebootbuttonreboot"               }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->SystemConfiguration: Controller init: function()");
        this.control({
            "*": {
                "WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue": this.updateStoreValue
            }
            , "desktoptoolbartoptaskbar button[action=openWEB_CFG_SYSTEM]": {click:  this.openSystemConfiguration                                            }
            , "systemconfigurationmain":                    {hide:   this.closeSystemConfiguration, minimize: this.openSystemConfiguration   }
            , "#menuOpenWEB_CFG_SYSTEM":                    {click:  this.menuOpenSystemConfiguration                                        }

            , "systemconfigurationbuttoncancel":            {click:  this.cancelConfigurationChanges   }
            , "systemconfigurationbuttonsave":              {click:  this.saveConfigurationChanges     }
            , "systemconfigurationsystemconfiguration":     {tabchange:  this.changeActiveTab          }
            , "systemconfigurationrebootbuttonreboot":      {click:  this.clickReboot                  }


        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.systemconfiguration.SystemConfiguration.openSystemConfiguration":            this.openSystemConfiguration
                      , "WPAKD.controller.systemconfiguration.SystemConfiguration.menuOpenSystemConfiguration":      this.menuOpenSystemConfiguration
                      , "WPAKD.controller.systemconfiguration.SystemConfiguration.closeSystemConfigurationDetails":  this.closeSystemConfigurationDetails
                      , "WPAKD.controller.systemconfiguration.SystemConfiguration.loadSystemConfiguration":          this.loadSystemConfiguration
                      , "WPAKD.controller.systemconfiguration.SystemConfiguration.checkModifiedConfigStores":        this.checkModifiedConfigStores
                      , "WPAKD.controller.systemconfiguration.SystemConfiguration.configurationSaved":               this.configurationSaved
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->SystemConfiguration: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    /*
     * Getters and Setters for configuration sync status (is store in sync with database).
     */
    , setConfigurationSyncStatus: function(status) {this.configurationSynced = status;}
    , getConfigurationSyncStatus: function() {
        if (this.configurationSynced === undefined) {this.setConfigurationSyncStatus(true);}
        return this.configurationSynced;
    }

    /*
     * If old tab is the FTP server configuration, ensure that all servers have been sync"ed up by checking their ID.
     */
    , changeActiveTab: function(tabPanel, newCard, oldCard) {
        this.consoleLog("changeActiveTab()");
    }

    , clickReboot: function() {
        this.consoleLog("clickReboot()");
        var scope = this;
        Ext.Msg.show({
            title: i18n.gettext("Restart Webcampak ?"),
            msg: i18n.gettext("Are you sure ? Picture acquisition will be suspended during reboot"),
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn){
                if(btn === "yes") {
                    var serverUrl = window.location.href;
                    var serverUrl = serverUrl.replace("mobile","");
                    var serverUrl = serverUrl + "/../system/reboot";
                    scope.fireEvent("WPAKD.controller.desktop.BackgroundActivities.startAjaxLoading");
                    Ext.Ajax.request({
                        url: serverUrl
                        , timeout: 10000
                        , success: function(response){
                            scope.fireEvent("WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading");
                            console.log(response);
                            var serverResponse = Ext.decode(response.responseText, true);
                            console.log(serverResponse);
                            if (serverResponse !== null) {
                                if (serverResponse.success === true) {
                                    Ext.MessageBox.show({
                                        title: i18n.gettext("Info"),
                                        msg: serverResponse.message,
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.INFO
                                    });
                                } else if (serverResponse.authentication === false) {
                                    Ext.MessageBox.show({
                                        title: i18n.gettext("Unable to perform reboot"),
                                        msg: serverResponse.message,
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                            }
                        }
                        , failure: function(response, opts) {
                            scope.fireEvent("WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading");
                            // This is a bad hack.
                            // Reboot happen as soon as requested, so the return call will fail.
                            // A better solution would be to wait a couple of seconds before reboot to give the server
                            // enough time to return the current AJAX call.
                            Ext.MessageBox.show({
                                 title: i18n.gettext("Reboot"),
                                 msg: i18n.gettext("Reboot is in progress, please wait for 1mn before refreshing the page"),
                                 buttons: Ext.MessageBox.OK,
                                 icon: Ext.MessageBox.INFO
                             });
                        }
                    });
                }
            }
        });
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        this.consoleLog("updateStoreValue()");
        var configRecord = this.getSystemconfigurationSystemConfigurationStore().findRecord("NAME", configName, 0, false, false, true);
        if (configRecord !== undefined && configRecord !== null) {
            if (configRecord.get("VALUE") !== newValue) {
                this.consoleLog("updateStoreValue(): update config: " + configName + " from: " + configRecord.get("VALUE") + " to: " + newValue, "info");
                configRecord.set("VALUE", newValue);
                this.checkModifiedConfigStores();
            }
        } else {
            this.consoleLog("updateStoreValue(): Unable to find: " + configName, "warn");
        }
    }

    /*
     * Caluclate the number of dirty records update the sync status and message about configuration change
     */
    , checkModifiedConfigStores: function() {
        this.consoleLog("checkModifiedConfigStores()");
        var dirtyRecords = 0;
        this.getSystemconfigurationSystemConfigurationStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        //Add same logic to other stores
        if (dirtyRecords > 0) {
            this.getSystemconfigurationsystemconfigurationchanges().setText(i18n.gettext("Configuration has been modified"));
            this.setConfigurationSyncStatus(false);
            this.getSystemconfigurationbuttoncancel().setDisabled(false);
            this.getSystemconfigurationbuttonsave().setDisabled(false);
        } else {
            this.getSystemconfigurationsystemconfigurationchanges().setText(i18n.gettext("No configuration changes"));
            this.setConfigurationSyncStatus(true);
            this.getSystemconfigurationbuttoncancel().setDisabled(true);
            this.getSystemconfigurationbuttonsave().setDisabled(true);
        }
    }

    , cancelConfigurationChanges: function() {
        this.consoleLog("cancelConfigurationChanges()");
        this.getSystemconfigurationSystemConfigurationStore().each(function (rec) {
            if (rec.dirty === true) {rec.reject();}
        });

        // Need to add the same function for each store
        this.loadSystemConfiguration();
    }

    , saveConfigurationChanges: function() {
        this.consoleLog("saveConfigurationChanges()");
        if (this.getConfigurationSyncStatus() === false) {
            var requiredStores = [];
            var isDirty = false;
            this.getSystemconfigurationSystemConfigurationStore().each(function (rec) {if (rec.dirty === true) {isDirty = true;}});
            if (isDirty === true) {requiredStores.push({store: this.getSystemconfigurationSystemConfigurationStore(), action: "SYNC"});}

            this.fireEvent("WPAKD.controller.desktop.loading.SyncStores.beginLoading"
                , "WEB_CFG_SYSTEMCONFIGSYNC"
                , "WPAKD.controller.systemconfiguration.SystemConfiguration.configurationSaved"
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

    , loadSystemConfiguration: function() {
        this.consoleLog("loadSystemConfiguration()");
        this.consoleLog("loadSystemConfiguration(): Capture records: " + this.getSystemconfigurationSystemConfigurationStore().count());
        if (this.getSystemconfigurationSystemConfigurationStore().count() > 0) {
            this.checkModifiedConfigStores();
            // Load Capture tab
            this.loadSettings();
        }

    }

    , loadSettings: function() {
        this.consoleLog("loadSettings()");

        var scope = this;
        //We store the content of the store in a Javascript object
        var configObj = {};
        this.getSystemconfigurationSystemConfigurationStore().each(function (rec) {
            var configValue = rec.get("VALUE");
            var configName = rec.get("NAME");
            configObj[configName] = configValue;
        });

        if(configObj.hasOwnProperty("cfgnetif")){this.getSystemconfigurationgeneralcfgnetif().setValue(configObj["cfgnetif"]);
        } else {this.getSystemconfigurationgeneralcfgnetif().setVisible(false);}

        if(configObj.hasOwnProperty("cfgxferthreads")){this.getSystemconfigurationgeneralcfgxferthreads().setValue(configObj["cfgxferthreads"]);
        } else {this.getSystemconfigurationgeneralcfgxferthreads().setVisible(false);}

        if(configObj.hasOwnProperty("cfgxfermaxfilesperthread")){this.getSystemconfigurationgeneralcfgxfermaxfilesperthread().setValue(configObj["cfgxfermaxfilesperthread"]);
        } else {this.getSystemconfigurationgeneralcfgxfermaxfilesperthread().setVisible(false);}

        if(configObj.hasOwnProperty("cfgftpresourcespassword")){this.getSystemconfigurationgeneralcfgftpresourcespassword().setValue(configObj["cfgftpresourcespassword"]);
        } else {this.getSystemconfigurationgeneralcfgftpresourcespassword().setVisible(false);}

        if(configObj.hasOwnProperty("cfggphotoports")){this.getSystemconfigurationgeneralcfggphotoports().setValue(configObj["cfggphotoports"]);
        } else {this.getSystemconfigurationgeneralcfggphotoports().setVisible(false);}

        if(configObj.hasOwnProperty("cfggphotoportscameras")){this.getSystemconfigurationgeneralcfggphotoportscameras().setValue(configObj["cfggphotoportscameras"]);
        } else {this.getSystemconfigurationgeneralcfggphotoportscameras().setVisible(false);}

        if(configObj.hasOwnProperty("cfgphidgetactivate")){this.getSystemconfigurationgeneralcfgphidgetactivate().setValue(configObj["cfgphidgetactivate"]);
        } else {this.getSystemconfigurationgeneralcfgphidgetactivate().setVisible(false);}

        if(configObj.hasOwnProperty("cfgservertimezone")){this.getSystemconfigurationgeneralcfgservertimezone().setValue(configObj["cfgservertimezone"]);
        } else {this.getSystemconfigurationgeneralcfgservertimezone().setVisible(false);}

        if(configObj.hasOwnProperty("cfgstatsactivate")){this.getSystemconfigurationgeneralcfgstatsactivate().setValue(configObj["cfgstatsactivate"]);
        } else {this.getSystemconfigurationgeneralcfgstatsactivate().setVisible(false);}

        this.getSystemconfigurationgeneralmain().setLoading(false);
    }


    , menuOpenSystemConfiguration: function() {
        this.consoleLog("menuOpenSystemConfiguration()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");

        var requiredStores = [];
        requiredStores.push({store: this.getSharedTimezonesStore(),                         action: "LOAD"});
        requiredStores.push({store: this.getSystemconfigurationSystemConfigurationStore(),  action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_CFG_SYSTEM"
            , "WPAKD.controller.systemconfiguration.SystemConfiguration.openSystemConfiguration"
            , requiredStores);

        var applicationName = "WEB_CFG_SYSTEM";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    }

    , openSystemConfiguration: function() {
        this.consoleLog("openSystemConfiguration()");
        Ext.getBody().unmask();

        if(this.getSystemconfigurationmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getSystemconfigurationmain().getId()) {
            this.consoleLog("openSystemConfiguration(): getSystemconfigurationmain().toFront()");
            this.getSystemconfigurationmain().toFront();
        } else if(!this.getSystemconfigurationmain().isVisible()) {
            this.consoleLog("openSystemConfiguration(): getSystemconfigurationmain().setVisible(true)");
            this.getDesktopmain().add(this.getSystemconfigurationmain());
            this.getSystemconfigurationmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tbsystemconfiguration").setVisible(true);
            this.fireEvent("WPAKD.controller.desktop.WindowManagement.adjustWindowSize", this.getSystemconfigurationmain());
            this.loadSystemConfiguration();
        } else {
            this.consoleLog("openSystemConfiguration(): getSystemconfigurationmain().setVisible(false)");
            this.getSystemconfigurationmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tbsystemconfiguration").setVisible(true);
        }
    }

    , closeSystemConfiguration: function() {
        this.consoleLog("closeSystemConfiguration()");
        this.getDesktoptoolbartoptaskbar().getComponent("tbsystemconfiguration").setVisible(false);
    }

});
