/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.sourcesconfiguration.SourcesConfiguration");
//</debug>
Ext.define("WPAKD.controller.sourcesconfiguration.SourcesConfiguration", {
    extend: "Ext.app.Controller",

    views: [
        "desktop.toolbar.top.Taskbar"
        , "sourcesconfiguration.Main"
        , "sourcesconfiguration.SourcesList"
        , "sourcesconfiguration.SourcesConfiguration"
        , "sourcesconfiguration.SourcesConfigurationChanges"
        , "sourcesconfiguration.ButtonCancel"
        , "sourcesconfiguration.ButtonSave"

        , "sourcesconfiguration.advanced.Main"
        , "sourcesconfiguration.phidgets.Main"
        , "sourcesconfiguration.capture.Main"
        , "sourcesconfiguration.customvideos.Main"
        , "sourcesconfiguration.ftp.Main"
        , "sourcesconfiguration.pictures.Main"
        , "sourcesconfiguration.postprod.Main"
        , "sourcesconfiguration.videos.Main"
    ],

    stores: [
        "shared.Sources"
        , "shared.Timezones"
        , "shared.UsbPorts"
        , "shared.CameraModels"
        , "shared.PhidgetsPorts"

        // Contains the list of tabs & sections to be displayed to the user during configuration
        , "sourcesconfiguration.ConfigurationTabs"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.SectionVideo"
        , "sourcesconfiguration.SectionVideoCustom"
        , "sourcesconfiguration.SectionVideoPost"

        // Contains the list of configuration settings and their values to be displayed to the user during configuration
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.Video"
        , "sourcesconfiguration.VideoCustom"
        , "sourcesconfiguration.VideoPost"
        , "sourcesconfiguration.FTPServers"
        , "sourcesconfiguration.WatermarkFiles"
        , "sourcesconfiguration.Fonts"
        , "sourcesconfiguration.PhidgetSensors"
        , "sourcesconfiguration.PhidgetPorts"

    ],

    models: [
        "shared.Sources"
        , "shared.Timezones"
        , "shared.UsbPorts"
        , "shared.CameraModels"
        , "shared.PhidgetsPorts"

        // Contains the list of tabs & sections to be displayed to the user during configuration
        , "sourcesconfiguration.ConfigurationTabs"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.SectionVideo"
        , "sourcesconfiguration.SectionVideoCustom"
        , "sourcesconfiguration.SectionVideoPost"

        // Contains the list of configuration settings and their values to be displayed to the user during configuration
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.Video"
        , "sourcesconfiguration.VideoCustom"
        , "sourcesconfiguration.VideoPost"
        , "sourcesconfiguration.FTPServers"
        , "sourcesconfiguration.WatermarkFiles"
        , "sourcesconfiguration.Fonts"
        , "sourcesconfiguration.PhidgetSensors"
        , "sourcesconfiguration.PhidgetPorts"

    ],

    refs: [
        {ref: "desktopmain",                selector: "desktopmain"                 }
        , {ref: "desktoptoolbartoptaskbar", selector: "desktoptoolbartoptaskbar"    }

        , {ref: "sourcesconfigurationmain",                         selector: "sourcesconfigurationmain",                       autoCreate: true,   xtype: "sourcesconfigurationmain"      }
        , {ref: "sourcesconfigurationsourceslist",                  selector: "sourcesconfigurationsourceslist"                 }
        , {ref: "sourcesconfigurationsourcesconfiguration",         selector: "sourcesconfigurationsourcesconfiguration"        }
        , {ref: "sourcesconfigurationsourcesconfigurationchanges",  selector: "sourcesconfigurationsourcesconfigurationchanges" }
        , {ref: "sourcesconfigurationbuttoncancel",                 selector: "sourcesconfigurationbuttoncancel"                }
        , {ref: "sourcesconfigurationbuttonsave",                   selector: "sourcesconfigurationbuttonsave"                  }

        , {ref: "sourcesconfigurationadvancedmain",     selector: "sourcesconfigurationadvancedmain"    }
        , {ref: "sourcesconfigurationphidgetsmain",     selector: "sourcesconfigurationphidgetsmain"    }
        , {ref: "sourcesconfigurationcapturemain",      selector: "sourcesconfigurationcapturemain"     }
        , {ref: "sourcesconfigurationcustomvideosmain", selector: "sourcesconfigurationcustomvideosmain"}
        , {ref: "sourcesconfigurationftpmain",          selector: "sourcesconfigurationftpmain"         }
        , {ref: "sourcesconfigurationpicturesmain",     selector: "sourcesconfigurationpicturesmain"    }
        , {ref: "sourcesconfigurationpostprodmain",     selector: "sourcesconfigurationpostprodmain"    }
        , {ref: "sourcesconfigurationvideosmain",       selector: "sourcesconfigurationvideosmain"      }


    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration: Controller init: function()");
        this.control({
            "desktoptoolbartoptaskbar button[action=openWEB_CFG_SOURCES]":  {click:  this.openSourcesConfiguration                                              }
            , "sourcesconfigurationmain":                   {hide:   this.closeSourcesConfiguration, minimize: this.openSourcesConfiguration    }
            , "#menuOpenWEB_CFG_SOURCES":                   {click:  this.menuOpenSourcesConfiguration                                          }

            , "sourcesconfigurationsourceslist":            {
                                                                selectionchange:   this.onSourceSelected
                                                                , beforeselect:   this.verifyConfigurationStatusBeforeSelect
                                                            }
            , "sourcesconfigurationbuttoncancel":           {click:  this.cancelConfigurationChanges   }
            , "sourcesconfigurationbuttonsave":             {click:  this.saveConfigurationChanges     }
            , "sourcesconfigurationsourcesconfiguration":   {tabchange:  this.changeActiveTab          }


        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.openSourcesConfiguration":            this.openSourcesConfiguration
                      , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.menuOpenSourcesConfiguration":      this.menuOpenSourcesConfiguration
                      , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.closeSourcesConfigurationDetails":  this.closeSourcesConfigurationDetails
                      , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.loadSourceConfiguration":           this.loadSourceConfiguration
                      , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores":         this.checkModifiedConfigStores
                      , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.configurationSaved":                this.configurationSaved
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration: ";
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
    , setRemoteHost: function(remoteHost) {this.remoteHost = remoteHost;}
    , getRemoteHost: function() {
        if (this.remoteHost === undefined) {this.setRemoteHost(null);}
        return this.remoteHost;
    }


    /*
     * If old tab is the FTP server configuration, ensure that all servers have been sync"ed up by checking their ID.
     */
    , changeActiveTab: function(tabPanel, newCard, oldCard) {
        this.consoleLog("changeActiveTab()");
        // If old tab is FTP Server, we ensure all FTP servers have been saved
        if (oldCard.alias[0] === "widget.sourcesconfigurationftpmain") {
            var syncStore = false;
            var scope = this;
            this.getSourcesconfigurationFTPServersStore().each(function (rec) {
                var currentID = rec.get("ID");
                scope.consoleLog("changeActiveTab(): CurrentID: " + currentID);
                if (isNaN(currentID) && currentID.indexOf("FTP_") > -1) {
                    scope.consoleLog("changeActiveTab():  currentID.indexOf: " + currentID.indexOf("FTP_"));
                    Ext.Msg.show({
                        title: i18n.gettext("Unsaved Server"),
                        msg: i18n.gettext("You have an unsaved FTP server, you cannot exit the FTP tab."),
                        buttons: Ext.Msg.OK,
                        icon: Ext.Msg.WARNING
                    });
                    scope.getSourcesconfigurationsourcesconfiguration().setActiveTab(oldCard);
                }
            });
        }
    }

    /*
     * Caluclate the number of dirty records update the sync status and message about configuration change
     */
    , checkModifiedConfigStores: function() {
        this.consoleLog("checkModifiedConfigStores()");
        var dirtyRecords = 0;
        this.getSourcesconfigurationCaptureStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getSourcesconfigurationVideoStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getSourcesconfigurationVideoCustomStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getSourcesconfigurationVideoPostStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        this.getSourcesconfigurationFTPServersStore().each(function (rec) {
            if (rec.dirty === true) {dirtyRecords++;}
        });
        //Add same logic to other stores
        if (dirtyRecords > 0) {
            this.getSourcesconfigurationsourcesconfigurationchanges().setText(i18n.gettext("Configuration has been modified"));
            this.setConfigurationSyncStatus(false);
            this.getSourcesconfigurationbuttoncancel().setDisabled(false);
        } else {
            this.getSourcesconfigurationsourcesconfigurationchanges().setText(i18n.gettext("No configuration changes"));
            this.setConfigurationSyncStatus(true);
            this.getSourcesconfigurationbuttoncancel().setDisabled(true);
        }
    }

    /*
     * Before selecting a source in the grid, ensure this source has been saved to database.
     * If not cancel selection and ask user to save configuration.
     */
    , verifyConfigurationStatusBeforeSelect: function(scope, record, index) {
        this.consoleLog("verifyConfigurationStatusBeforeSelect()");
        if (this.getConfigurationSyncStatus() === false) { // Means configuration has been changed
            var scope = this;
            Ext.Msg.show({
                title: i18n.gettext("Unsaved configuration"),
                msg: i18n.gettext("Your configuration changes have not been saved and will be lost. <br />Please Save your configuration or Cancel your changes"),
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
            return false;
        } else {
            return true;
        }
    }

    , onSourceSelected: function(scope, selected) {
        this.consoleLog("onSourceSelected()");
        // Set the active tab back to capture when changing / selecting source
        this.getSourcesconfigurationcapturemain().setLoading(i18n.gettext("Loading Configuration"));
        this.getSourcesconfigurationsourcesconfiguration().setActiveTab(this.getSourcesconfigurationcapturemain());

        this.disableAllConfigScreens();

        var seletedSource = this.getSourcesconfigurationsourceslist().getSelectionModel().getSelection()[0];
        if (seletedSource) {
            this.getSourcesconfigurationsourcesconfiguration().setTitle(i18n.gettext("Configuration of:") + " " + seletedSource.get("NAME"));

            Ext.getStore("sourcesconfiguration.Capture").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("sourcesconfiguration.Video").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("sourcesconfiguration.VideoCustom").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("sourcesconfiguration.VideoPost").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("sourcesconfiguration.FTPServers").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));
            Ext.getStore("sourcesconfiguration.WatermarkFiles").getProxy().setExtraParam("SOURCEID", seletedSource.get("SOURCEID"));

            var requiredStores = [];

            if (this.getRemoteHost() !== seletedSource.get("REMOTE_HOST")) {
                requiredStores.push({store: this.getSourcesconfigurationFontsStore(),           action: "REFRESH"});
                requiredStores.push({store: this.getSourcesconfigurationPhidgetSensorsStore(),  action: "REFRESH"});
                this.setRemoteHost(seletedSource.get("REMOTE_HOST"))
            }else {
                requiredStores.push({store: this.getSourcesconfigurationFontsStore(),           action: "REFRESH"});
                requiredStores.push({store: this.getSourcesconfigurationPhidgetSensorsStore(),  action: "REFRESH"});
            }
            requiredStores.push({store: this.getSourcesconfigurationCaptureStore(),         action: "REFRESH"});
            requiredStores.push({store: this.getSourcesconfigurationVideoStore(),           action: "REFRESH"});
            requiredStores.push({store: this.getSourcesconfigurationVideoCustomStore(),     action: "REFRESH"});
            requiredStores.push({store: this.getSourcesconfigurationVideoPostStore(),       action: "REFRESH"});
            requiredStores.push({store: this.getSourcesconfigurationFTPServersStore(),      action: "REFRESH"});
            requiredStores.push({store: this.getSourcesconfigurationWatermarkFilesStore(),  action: "REFRESH"});

            this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
                , "WEB_CFG_SOURCESCONFIG"
                , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.loadSourceConfiguration"
                , requiredStores);
        }
    }

    , cancelConfigurationChanges: function() {
        this.consoleLog("cancelConfigurationChanges()");
        this.getSourcesconfigurationCaptureStore().each(function (rec) {
            if (rec.dirty === true) {rec.reject();}
        });
        this.getSourcesconfigurationVideoStore().each(function (rec) {
            if (rec.dirty === true) {rec.reject();}
        });
        this.getSourcesconfigurationVideoCustomStore().each(function (rec) {
            if (rec.dirty === true) {rec.reject();}
        });
        this.getSourcesconfigurationVideoPostStore().each(function (rec) {
            if (rec.dirty === true) {rec.reject();}
        });
        this.getSourcesconfigurationFTPServersStore().each(function (rec) {
            if (rec.dirty === true) {rec.reject();}
        });
        this.getSourcesconfigurationFTPServersStore().load();

        // Need to add the same function for each store
        this.loadSourceConfiguration();
    }

    , saveConfigurationChanges: function() {
        this.consoleLog("saveConfigurationChanges()");
        if (this.getConfigurationSyncStatus() === false) {
            var requiredStores = [];
            var isDirty = false;
            this.getSourcesconfigurationCaptureStore().each(function (rec) {if (rec.dirty === true) {isDirty = true;}});
            if (isDirty === true) {requiredStores.push({store: this.getSourcesconfigurationCaptureStore(), action: "SYNC"});}
            var isDirty = false;
            this.getSourcesconfigurationVideoStore().each(function (rec) {if (rec.dirty === true) {isDirty = true;}});
            if (isDirty === true) {requiredStores.push({store: this.getSourcesconfigurationVideoStore(), action: "SYNC"});}
            var isDirty = false;
            this.getSourcesconfigurationVideoCustomStore().each(function (rec) {if (rec.dirty === true) {isDirty = true;}});
            if (isDirty === true) {requiredStores.push({store: this.getSourcesconfigurationVideoCustomStore(), action: "SYNC"});}
            var isDirty = false;
            this.getSourcesconfigurationVideoPostStore().each(function (rec) {if (rec.dirty === true) {isDirty = true;}});
            if (isDirty === true) {requiredStores.push({store: this.getSourcesconfigurationVideoPostStore(), action: "SYNC"});}
            var isDirty = false;
            this.getSourcesconfigurationFTPServersStore().each(function (rec) {if (rec.dirty === true) {isDirty = true;}});
            if (isDirty === true) {requiredStores.push({store: this.getSourcesconfigurationFTPServersStore(), action: "SYNC"});}
            this.fireEvent("WPAKD.controller.desktop.loading.SyncStores.beginLoading"
                , "WEB_CFG_SOURCESCONFIGSYNC"
                , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.configurationSaved"
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


    , disableAllConfigScreens: function() {
        this.consoleLog("disableAllConfigScreens()");
        this.getSourcesconfigurationbuttoncancel().setDisabled(true);
        this.getSourcesconfigurationbuttonsave().setDisabled(true);
        this.getSourcesconfigurationadvancedmain().setDisabled(true);
        this.getSourcesconfigurationphidgetsmain().setDisabled(true);
        this.getSourcesconfigurationcapturemain().setDisabled(true);
        this.getSourcesconfigurationcustomvideosmain().setDisabled(true);
        this.getSourcesconfigurationftpmain().setDisabled(true);
        this.getSourcesconfigurationpicturesmain().setDisabled(true);
        this.getSourcesconfigurationpostprodmain().setDisabled(true);
        this.getSourcesconfigurationvideosmain().setDisabled(true);
    },

    enableAllConfigScreens: function() {
        this.consoleLog("enableAllConfigScreens()");
        this.getSourcesconfigurationbuttoncancel().setDisabled(false);
        this.getSourcesconfigurationbuttonsave().setDisabled(false);
        //this.getSourcesconfigurationadvancedmain().setDisabled(false);
        //this.getSourcesconfigurationcapturemain().setDisabled(false);
        //this.getSourcesconfigurationcustomvideosmain().setDisabled(false);
        //this.getSourcesconfigurationftpmain().setDisabled(false);
        //this.getSourcesconfigurationpicturesmain().setDisabled(false);
        //this.getSourcesconfigurationpostprodmain().setDisabled(false);
        //this.getSourcesconfigurationvideosmain().setDisabled(false);
    },

    loadSourceConfiguration: function() {
        this.consoleLog("loadSourceConfiguration()");
        this.consoleLog("loadSourceConfiguration(): Capture records: " + this.getSourcesconfigurationCaptureStore().count());
        if (this.getSourcesconfigurationCaptureStore().count() > 0) {
            this.enableAllConfigScreens();
            this.checkModifiedConfigStores();
            // Load Capture tab
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.loadSettings");
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.loadSettings");
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.loadSettings");
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.loadSettings");
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.loadSettings");
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.loadSettings");
            this.fireEvent("WPAKD.controller.sourcesconfiguration.phidgets.Phidgets.loadSettings");
            this.fireEvent("WPAKD.controller.sourcesconfiguration.ftp.Ftp.loadSettings");
        }

    }

    , menuOpenSourcesConfiguration: function() {
        this.consoleLog("menuOpenSourcesConfiguration()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),                           action: "REFRESH"});
        requiredStores.push({store: this.getSharedTimezonesStore(),                         action: "LOAD"});
        requiredStores.push({store: this.getSharedUsbPortsStore(),                          action: "LOAD"});
        requiredStores.push({store: this.getSharedCameraModelsStore(),                      action: "LOAD"});
        requiredStores.push({store: this.getSharedPhidgetsPortsStore(),                     action: "REFRESH"});

        //Load for each of the configuration files, the list of sections that can be displayed for configuration
        requiredStores.push({store: this.getSourcesconfigurationSectionCaptureStore(),      action: "LOAD"});
        requiredStores.push({store: this.getSourcesconfigurationSectionVideoStore(),        action: "LOAD"});
        requiredStores.push({store: this.getSourcesconfigurationSectionVideoCustomStore(),  action: "LOAD"});
        requiredStores.push({store: this.getSourcesconfigurationSectionVideoPostStore(),    action: "LOAD"});
        requiredStores.push({store: this.getSourcesconfigurationConfigurationTabsStore(),   action: "LOAD"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_CFG_SOURCES"
            , "WPAKD.controller.sourcesconfiguration.SourcesConfiguration.openSourcesConfiguration"
            , requiredStores);

        var applicationName = "WEB_CFG_SOURCES";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    },

    openSourcesConfiguration: function(key) {
        this.consoleLog("openSourcesConfiguration()");
        Ext.getBody().unmask();

        if(this.getSourcesconfigurationmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getSourcesconfigurationmain().getId()) {
            this.consoleLog("openSourcesConfiguration(): getSourcesconfigurationmain().toFront()");
            this.getSourcesconfigurationmain().toFront();
        } else if(!this.getSourcesconfigurationmain().isVisible()) {
            this.consoleLog("openSourcesConfiguration(): getSourcesconfigurationmain().setVisible(true)");
            this.getDesktopmain().add(this.getSourcesconfigurationmain());
            this.getSourcesconfigurationmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tbsourcesconfiguration").setVisible(true);
            //this.setVisibleElements();
        } else {
            this.consoleLog("openSourcesConfiguration(): getSourcesconfigurationmain().setVisible(false)");
            this.getSourcesconfigurationmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tbsourcesconfiguration").setVisible(true);
        }
    },

    closeSourcesConfiguration: function(key) {
        this.consoleLog("closeSourcesConfiguration()");
        this.getDesktoptoolbartoptaskbar().getComponent("tbsourcesconfiguration").setVisible(false);
    }

});
